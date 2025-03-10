/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * The attribute by which to filter the results.
 */
export enum GetVodSeasonVideosFilterEnum {
  Viewable = "viewable",
}

/**
 * The way to sort the results.
 */
export enum GetVodSeasonVideosSortEnum {
  Date = "date",
  Default = "default",
  Manual = "manual",
  Name = "name",
  PurchaseTime = "purchase_time",
  ReleaseDate = "release_date",
}

export class GetVodSeasonVideosRequest extends SpeakeasyBase {
  /**
   * The attribute by which to filter the results.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter",
  })
  filter?: GetVodSeasonVideosFilterEnum;

  /**
   * The ID of the On Demand.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ondemand_id",
  })
  ondemandId: number;

  /**
   * The page number of the results to show.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The number of items to show on each page of results, up to a maximum of 100.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  /**
   * The ID of the season.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=season_id",
  })
  seasonId: number;

  /**
   * The way to sort the results.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodSeasonVideosSortEnum;
}

export class GetVodSeasonVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * The videos were returned.
   */
  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
