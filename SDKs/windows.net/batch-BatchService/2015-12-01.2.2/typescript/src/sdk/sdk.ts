import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Applications } from "./applications";
import { Certificates } from "./certificates";
import { ComputeNodes } from "./computenodes";
import { Files } from "./files";
import { JobSchedules } from "./jobschedules";
import { Jobs } from "./jobs";
import { Pools } from "./pools";
import { Tasks } from "./tasks";


export const ServerList = [
	"https://batch.core.windows.net",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public applications: Applications;
  public certificates: Certificates;
  public computeNodes: ComputeNodes;
  public files: Files;
  public jobSchedules: JobSchedules;
  public jobs: Jobs;
  public pools: Pools;
  public tasks: Tasks;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.certificates = new Certificates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.computeNodes = new ComputeNodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jobSchedules = new JobSchedules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jobs = new Jobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pools = new Pools(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tasks = new Tasks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}