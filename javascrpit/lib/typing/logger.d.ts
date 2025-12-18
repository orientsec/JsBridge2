/**
 * 日志级别枚举
 */
export declare enum LogLevel {
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
/**
 * 日志记录器类
 */
declare class Logger {
    /**
     * 日志标签
     */
    private readonly TAG;
    /**
     * 是否可调试
     */
    debuggable: boolean;
    /**
     * 格式化日志消息
     * @param level 日志级别
     * @param message 日志消息
     * @returns 格式化后的消息
     */
    private formatMessage;
    /**
     * 记录信息日志
     * @param message 日志消息
     */
    info(message: string): void;
    /**
     * 记录警告日志
     * @param message 日志消息
     */
    warn(message: string): void;
    /**
     * 记录错误日志
     * @param message 日志消息
     * @param error 错误对象
     */
    error(message: string, error?: unknown): void;
}
/**
 * 导出单例日志记录器实例
 */
export declare const logger: Logger;
export {};
