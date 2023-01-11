import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderContact
/** 
 * Use this field to create a new account as the sold-to contact of the Order Line Item (OLI). 
 * 
 * You can either use this field to create a new account or use the `soldTo` field to assign an existing account as the sold-to contact of the OLI. 
 * 
 * If neither this field nor the `soldTo` field is set, the system will automatically set the default sold-to contact under the OLI's invoice owner account as the sold-to contact of the OLI.
 * 
**/
export class OrderContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
