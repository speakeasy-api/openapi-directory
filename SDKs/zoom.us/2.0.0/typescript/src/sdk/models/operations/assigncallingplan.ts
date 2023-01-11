import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AssignCallingPlanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class AssignCallingPlanApplicationJsonCallingPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AssignCallingPlanApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling_plans", elemType: AssignCallingPlanApplicationJsonCallingPlans })
  callingPlans?: AssignCallingPlanApplicationJsonCallingPlans[];
}


export class AssignCallingPlanMultipartFormDataCallingPlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AssignCallingPlanMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=calling_plans;json=true", elemType: AssignCallingPlanMultipartFormDataCallingPlans })
  callingPlans?: AssignCallingPlanMultipartFormDataCallingPlans[];
}


export class AssignCallingPlanRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: AssignCallingPlanApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: AssignCallingPlanMultipartFormData1;
}


export class AssignCallingPlanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class AssignCallingPlanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AssignCallingPlanPathParams;

  @SpeakeasyMetadata()
  request?: AssignCallingPlanRequests;

  @SpeakeasyMetadata()
  security: AssignCallingPlanSecurity;
}


export class AssignCallingPlanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  assignCallingPlan200ApplicationJSONAny?: any;
}
