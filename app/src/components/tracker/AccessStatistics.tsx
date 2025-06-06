"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiRefreshCw,
  FiUser,
  FiGlobe,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

type AccessData = {
  totalAccesses?: number;
  uniqueVisitors?: number;
  todayAccesses?: number;
  dailyChange?: number;
  accessByHour?: Record<number, number>;
  lastAccesses?: Array<{
    created_at: Date;
    date: string;
    ip: string;
    country?: string;
    city?: string;
    device?: string;
    devType?: string;
  }>;
};

const AccessStats = () => {
  const [stats, setStats] = useState<AccessData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    console.log("Fetching stats...");
    try {
      setLoading(true);
      const response = await fetch("/api/access-stats");

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Erro ${response.status}`);
      }

      const data = await response.json();
      console.log("Data received:", data);

      setStats(data.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Efeito de gradiente animado
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-4xl text-blue-500"
        >
          <FiRefreshCw />
        </motion.div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500 p-4">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold mb-2">Erro</h2>
        <p className="text-center max-w-md">{error}</p>
        <button
          onClick={fetchStats}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white relative overflow-hidden">
      {/* Efeito de gradiente dinâmico */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_100px)_var(--y,_100px),rgba(29,78,216,0.4),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
              Painel de Acessos
            </h1>
            <p className="text-gray-400">
              Monitoramento em tempo real dos visitantes
            </p>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <button
              onClick={fetchStats}
              disabled={loading}
              className="flex items-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <FiRefreshCw
                className={`mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Atualizar
            </button>
          </div>
        </motion.div>

        {/* Cartões de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            icon={<FiUser className="text-3xl" />}
            value={stats?.totalAccesses ?? 0}
            label="Total de Acessos"
            change={stats?.dailyChange}
          />
          <MetricCard
            icon={<FiGlobe className="text-3xl" />}
            value={stats?.uniqueVisitors ?? 0}
            label="Visitantes Únicos"
          />
          <MetricCard
            icon={<FiCalendar className="text-3xl" />}
            value={stats?.todayAccesses ?? 0}
            label="Acessos Hoje"
          />
        </div>

        {/* Mapa de calor de horários */}
        {stats?.accessByHour && (
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 mb-12 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FiClock className="mr-2" /> Picos de Acesso
            </h2>
            <div className="grid grid-cols-12 gap-1 h-48">
              {Array.from({ length: 24 }).map((_, hour) => {
                const hourAccesses = stats.accessByHour?.[hour] || 0;
                const maxAccess = Math.max(
                  ...Object.values(stats.accessByHour || {}),
                  1
                );
                const heightPercentage = (hourAccesses / maxAccess) * 100;

                return (
                  <div key={hour} className="flex flex-col items-center">
                    <div className="w-full flex-1 flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heightPercentage}%` }}
                        transition={{ duration: 1, delay: hour * 0.03 }}
                        className={`w-full rounded-t-sm ${
                          heightPercentage > 80
                            ? "bg-purple-600"
                            : heightPercentage > 50
                            ? "bg-blue-500"
                            : "bg-blue-400"
                        }`}
                      />
                    </div>
                    <span className="text-xs mt-1 text-gray-400">
                      {hour.toString().padStart(2, "0")}h
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tabela de últimos acessos - Versão melhorada */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700 overflow-hidden">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 px-2 md:px-0">
            Últimos Visitantes
          </h2>

          {stats?.lastAccesses && stats.lastAccesses.length > 0 ? (
            <div className="overflow-x-auto pb-2">
              <table className="w-full min-w-[600px] md:min-w-full">
                <thead>
                  <tr className="text-left text-sm md:text-base">
                    <th className="pb-3 px-3 md:px-4 font-medium text-gray-300">
                      Data/Hora
                    </th>
                    <th className="pb-3 px-3 md:px-4 font-medium text-gray-300">
                      IP
                    </th>
                    <th className="pb-3 px-3 md:px-4 font-medium text-gray-300">
                      Dispositivo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {stats.lastAccesses.slice(0, 10).map((access, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-gray-700/20 transition-colors"
                    >
                      <td className="py-3 px-3 md:px-4 text-sm md:text-base">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            {new Date(access.created_at).toLocaleString(
                              "pt-BR",
                              {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "America/Sao_Paulo",
                              }
                            )}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-3 md:px-4 font-mono text-sm md:text-base text-blue-400">
                        {access.ip}
                      </td>

                      <td className="py-3 px-3 md:px-4">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">
                            {access.device === "mobile"
                              ? "📱"
                              : access.device === "tablet"
                              ? "🖥️"
                              : "💻"}
                          </span>
                          <span className="text-sm md:text-base capitalize text-gray-200">
                            {access.devType || access.device || "Desconhecido"}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-8 text-center text-gray-400">
              <p>Nenhum acesso registrado ainda</p>
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Dados atualizados automaticamente. Atualize a página para ver as
            informações mais recentes.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente de cartão de métrica
const MetricCard = ({
  icon,
  value,
  label,
  change,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  change?: number;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
  >
    <div className="flex justify-between items-start">
      <div>
        <div className="text-gray-400 text-sm mb-1">{label}</div>
        <div className="text-3xl font-bold">{value}</div>
      </div>
      <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">{icon}</div>
    </div>
    {change !== undefined && (
      <div
        className={`mt-4 text-sm flex items-center ${
          change >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% em relação a ontem
      </div>
    )}
  </motion.div>
);

export default AccessStats;
