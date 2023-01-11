import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserSchedulersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserSchedulersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class UserSchedulersUserSchedulersListSchedulers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pmi" })
  pmi?: number;
}


// UserSchedulersUserSchedulersList
/** 
 * List of user's schedulers.
**/
export class UserSchedulersUserSchedulersList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schedulers", elemType: UserSchedulersUserSchedulersListSchedulers })
  schedulers?: UserSchedulersUserSchedulersListSchedulers[];
}


export class UserSchedulersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserSchedulersPathParams;

  @SpeakeasyMetadata()
  security: UserSchedulersSecurity;
}


export class UserSchedulersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userSchedulersList?: UserSchedulersUserSchedulersList;
}
