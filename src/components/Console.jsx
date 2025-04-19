import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LogLevel = {
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
  SUCCESS: "success",
};

const LogIcon = ({ level }) => {
  switch (level) {
    case LogLevel.ERROR:
      return (
        <svg
          className="w-4 h-4 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case LogLevel.WARNING:
      return (
        <svg
          className="w-4 h-4 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    case LogLevel.SUCCESS:
      return (
        <svg
          className="w-4 h-4 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

export default function Console({ logs = [] }) {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isExpanded, setIsExpanded] = useState({});

  const filteredLogs = logs.filter((log) => {
    const matchesFilter = filter === "all" || log.level === filter;
    const matchesSearch =
      searchTerm === "" ||
      log.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleExpand = (index) => {
    setIsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Console Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-surface/20 text-secondary text-sm rounded-lg px-3 py-1.5 border border-surface/40 focus:outline-none focus:border-primary"
          >
            <option value="all">All Logs</option>
            <option value={LogLevel.INFO}>Info</option>
            <option value={LogLevel.WARNING}>Warnings</option>
            <option value={LogLevel.ERROR}>Errors</option>
            <option value={LogLevel.SUCCESS}>Success</option>
          </select>
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-surface/20 text-secondary text-sm rounded-lg px-3 py-1.5 border border-surface/40 focus:outline-none focus:border-primary w-48"
          />
        </div>
        <button
          onClick={() => setIsExpanded({})}
          className="text-secondary hover:text-primary text-sm"
        >
          Collapse All
        </button>
      </div>

      {/* Console Content */}
      <div className="flex-1 overflow-y-auto space-y-2">
        <AnimatePresence initial={false}>
          {filteredLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`bg-surface/20 rounded-lg overflow-hidden ${
                isExpanded[index] ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <div
                className="p-3 flex items-start gap-3 cursor-pointer hover:bg-surface/30 transition-colors"
                onClick={() => toggleExpand(index)}
              >
                <LogIcon level={log.level || LogLevel.INFO} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-medium text-primary truncate">
                      {log.heading}
                    </h3>
                    <span className="text-xs text-secondary/60 whitespace-nowrap">
                      {log.timestamp}
                    </span>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded[index] ? "auto" : 20 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-secondary/80 mt-1 line-clamp-1">
                      {log.description}
                    </p>
                    {isExpanded[index] && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 text-xs text-secondary/60"
                      >
                        {log.details && (
                          <pre className="bg-surface/40 p-2 rounded overflow-x-auto">
                            {log.details}
                          </pre>
                        )}
                        {log.stack && (
                          <div className="mt-2 space-y-1">
                            {log.stack.map((line, i) => (
                              <div key={i} className="font-mono">
                                {line}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                <motion.svg
                  className="w-4 h-4 text-secondary/60 flex-shrink-0 mt-1"
                  animate={{ rotate: isExpanded[index] ? 180 : 0 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredLogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-secondary/60"
          >
            {searchTerm || filter !== "all" ? (
              <p>No matching logs found</p>
            ) : (
              <p>No logs to display</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
