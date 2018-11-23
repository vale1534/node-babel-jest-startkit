import * as os from "os";

const hostInfo = {
  homeDir: os.homedir(),
  hostname: os.hostname(),
  environ: { ...process.env }
};

export default hostInfo;
