import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCallingPlansSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListCallingPlans200ApplicationJsonCallingPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned" })
  assigned?: number;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subscribed" })
  subscribed?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}


export class ListCallingPlans200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling_plans", elemType: ListCallingPlans200ApplicationJsonCallingPlans })
  callingPlans?: ListCallingPlans200ApplicationJsonCallingPlans[];
}


export class ListCallingPlansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListCallingPlansSecurity;
}


export class ListCallingPlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCallingPlans200ApplicationJSONObject?: ListCallingPlans200ApplicationJson;
}
