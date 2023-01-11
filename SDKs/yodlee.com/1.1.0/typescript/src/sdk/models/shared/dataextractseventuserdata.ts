import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsEventLinks } from "./dataextractseventlinks";
import { DataExtractsUser } from "./dataextractsuser";



export class DataExtractsEventUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: DataExtractsEventLinks })
  links?: DataExtractsEventLinks[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: DataExtractsUser;
}
