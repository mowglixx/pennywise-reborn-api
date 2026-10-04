
// Alternate to console.log
export class Log {
    static title(...data: any[]): void {
        this.seperator()
        this.print("\n    ", ...data, "\n")
        this.seperator()
    }

    static panel(title: string, ...data: any[]): void
    static panel(title: string, logTypeOrData: (...data: any[]) => void, ...data: any[]): void
    static panel(title: string, logTypeOrData: ((...data: any[]) => void) | any, ...data: any[]): void {
        if (typeof logTypeOrData === "function") {
            this.title(title)
            data.forEach(d => logTypeOrData(d))
        }
        else {
            this.title(title)
            this.print(logTypeOrData, ...data)
        }
        this.seperator()
    }

    static seperator() {
        this.print(`========================================`)
    }

    static print(...data: any[]): void {
        console.log(...data)
    }
    static error(...data: any[]): void {
        console.error("\x1b[41m [ ERROR ] \x1b[0m", ...data)
    }
    static success(...data: any[]): void {
        console.info("\x1b[42m [ SUCCESS ] \x1b[0m", ...data)
    }
    static warn(...data: any[]): void {
        console.warn("\x1b[43m [ WARNING ] \x1b[0m", ...data)
    }
    static info(...data: any[]): void {
        console.info("\x1b[44m [ INFO ] \x1b[0m", ...data)
    }
}

