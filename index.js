import { exec } from "child_process"
import * as path from "path"

const sumatraPath = path.resolve("./SumatraPDF-3.5.2-64")
const printerName = "Brother DCP-J315W Printer"
const filePath = path.resolve("./sample.pdf")

const command = `${sumatraPath} -silent -print-to "${printerName}" "${filePath}"`

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error(err)
    }
    console.log(stdout, stderr)
})