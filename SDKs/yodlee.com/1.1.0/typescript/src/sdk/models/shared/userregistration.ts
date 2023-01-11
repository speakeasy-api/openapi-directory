import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { Name } from "./name";
import { UserRequestPreferences } from "./userrequestpreferences";



export class UserRegistration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UserAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=loginName" })
  loginName: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: UserRequestPreferences;

  @SpeakeasyMetadata({ data: "json, name=segmentName" })
  segmentName?: string;
}
