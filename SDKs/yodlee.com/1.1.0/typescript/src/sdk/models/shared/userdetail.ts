import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAddress } from "./useraddress";
import { Name } from "./name";
import { UserResponsePreferences } from "./userresponsepreferences";


export enum UserDetailRoleTypeEnum {
    Individual = "INDIVIDUAL"
}


export class UserDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: UserAddress;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=loginName" })
  loginName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: UserResponsePreferences;

  @SpeakeasyMetadata({ data: "json, name=roleType" })
  roleType?: UserDetailRoleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=segmentName" })
  segmentName?: string;
}
