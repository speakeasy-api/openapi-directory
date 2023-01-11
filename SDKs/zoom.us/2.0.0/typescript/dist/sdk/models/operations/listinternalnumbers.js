"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInternalNumbersResponse = exports.ListInternalNumbersRequest = exports.ListInternalNumbers200ApplicationJson = exports.ListInternalNumbers200ApplicationJsonInternalNumbers = exports.ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum = exports.ListInternalNumbersQueryParams = exports.ListInternalNumbersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListInternalNumbersPathParams = /** @class */ (function (_super) {
    __extends(ListInternalNumbersPathParams, _super);
    function ListInternalNumbersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], ListInternalNumbersPathParams.prototype, "accountId", void 0);
    return ListInternalNumbersPathParams;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbersPathParams = ListInternalNumbersPathParams;
var ListInternalNumbersQueryParams = /** @class */ (function (_super) {
    __extends(ListInternalNumbersQueryParams, _super);
    function ListInternalNumbersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListInternalNumbersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListInternalNumbersQueryParams.prototype, "pageSize", void 0);
    return ListInternalNumbersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbersQueryParams = ListInternalNumbersQueryParams;
var ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum;
(function (ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum) {
    ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum["EnGb"] = "en-GB";
    ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum["EnUs"] = "en-US";
    ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum["DeDe"] = "de-DE";
})(ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum = exports.ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum || (exports.ListInternalNumbers200ApplicationJsonInternalNumbersLanguagesEnum = {}));
var ListInternalNumbers200ApplicationJsonInternalNumbers = /** @class */ (function (_super) {
    __extends(ListInternalNumbers200ApplicationJsonInternalNumbers, _super);
    function ListInternalNumbers200ApplicationJsonInternalNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_for_external_meetings" }),
        __metadata("design:type", Boolean)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "allowForExternalMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_join" }),
        __metadata("design:type", Boolean)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "allowJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_number" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "displayNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], ListInternalNumbers200ApplicationJsonInternalNumbers.prototype, "visible", void 0);
    return ListInternalNumbers200ApplicationJsonInternalNumbers;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbers200ApplicationJsonInternalNumbers = ListInternalNumbers200ApplicationJsonInternalNumbers;
var ListInternalNumbers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListInternalNumbers200ApplicationJson, _super);
    function ListInternalNumbers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internal_numbers", elemType: ListInternalNumbers200ApplicationJsonInternalNumbers }),
        __metadata("design:type", Array)
    ], ListInternalNumbers200ApplicationJson.prototype, "internalNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListInternalNumbers200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListInternalNumbers200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListInternalNumbers200ApplicationJson.prototype, "totalRecords", void 0);
    return ListInternalNumbers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbers200ApplicationJson = ListInternalNumbers200ApplicationJson;
var ListInternalNumbersRequest = /** @class */ (function (_super) {
    __extends(ListInternalNumbersRequest, _super);
    function ListInternalNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInternalNumbersPathParams)
    ], ListInternalNumbersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInternalNumbersQueryParams)
    ], ListInternalNumbersRequest.prototype, "queryParams", void 0);
    return ListInternalNumbersRequest;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbersRequest = ListInternalNumbersRequest;
var ListInternalNumbersResponse = /** @class */ (function (_super) {
    __extends(ListInternalNumbersResponse, _super);
    function ListInternalNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListInternalNumbersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInternalNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListInternalNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInternalNumbers200ApplicationJson)
    ], ListInternalNumbersResponse.prototype, "listInternalNumbers200ApplicationJSONObject", void 0);
    return ListInternalNumbersResponse;
}(utils_1.SpeakeasyBase));
exports.ListInternalNumbersResponse = ListInternalNumbersResponse;
