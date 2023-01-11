import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeductionTypeDeductionCategoryEnum {
    None = "NONE",
    Unionfees = "UNIONFEES",
    Workplacegiving = "WORKPLACEGIVING"
}


export class DeductionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeductionCategory" })
  deductionCategory?: DeductionTypeDeductionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=DeductionTypeID" })
  deductionTypeID?: string;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromW1" })
  isExemptFromW1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReducesSuper" })
  reducesSuper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReducesTax" })
  reducesTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUTC?: string;
}


export class DeductionTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeductionCategory" })
  deductionCategory?: DeductionTypeDeductionCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=DeductionTypeID" })
  deductionTypeID?: string;

  @SpeakeasyMetadata({ data: "json, name=IsExemptFromW1" })
  isExemptFromW1?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReducesSuper" })
  reducesSuper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReducesTax" })
  reducesTax?: boolean;
}
