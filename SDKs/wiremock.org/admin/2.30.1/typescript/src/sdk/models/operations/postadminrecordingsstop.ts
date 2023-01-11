import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsStop200ApplicationJsonMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials;

  @SpeakeasyMetadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters" })
  queryParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}

export enum PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminRecordingsStop200ApplicationJsonMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fault" })
  fault?: PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" })
  fixedDelayMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" })
  fromConfiguredStub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=jsonBody" })
  jsonBody?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" })
  proxyBaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminRecordingsStop200ApplicationJsonMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newScenarioState" })
  newScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=persistent" })
  persistent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postServeActions" })
  postServeActions?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: PostAdminRecordingsStop200ApplicationJsonMappingsRequest;

  @SpeakeasyMetadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: PostAdminRecordingsStop200ApplicationJsonMappingsResponse;

  @SpeakeasyMetadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminRecordingsStop200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class PostAdminRecordingsStop200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings", elemType: PostAdminRecordingsStop200ApplicationJsonMappings })
  mappings?: PostAdminRecordingsStop200ApplicationJsonMappings[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PostAdminRecordingsStop200ApplicationJsonMeta;
}


export class PostAdminRecordingsStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postAdminRecordingsStop200ApplicationJSONObject?: PostAdminRecordingsStop200ApplicationJson;
}
