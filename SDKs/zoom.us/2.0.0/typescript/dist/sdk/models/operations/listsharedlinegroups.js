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
exports.ListSharedLineGroupsResponse = exports.ListSharedLineGroupsRequest = exports.ListSharedLineGroups200ApplicationJson = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroups = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroupsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListSharedLineGroupsQueryParams = /** @class */ (function (_super) {
    __extends(ListSharedLineGroupsQueryParams, _super);
    function ListSharedLineGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSharedLineGroupsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroupsQueryParams.prototype, "pageSize", void 0);
    return ListSharedLineGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroupsQueryParams = ListSharedLineGroupsQueryParams;
var ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum;
(function (ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum) {
    ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum["Pending"] = "pending";
    ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum["Available"] = "available";
})(ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum || (exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbersStatusEnum = {}));
var ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers, _super);
    function ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers = ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers;
var ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite, _super);
    function ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite.prototype, "name", void 0);
    return ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite = ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite;
var ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum;
(function (ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum) {
    ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum["Active"] = "active";
    ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum["Inactive"] = "inactive";
})(ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum || (exports.ListSharedLineGroups200ApplicationJsonSharedLineGroupsStatusEnum = {}));
var ListSharedLineGroups200ApplicationJsonSharedLineGroups = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJsonSharedLineGroups, _super);
    function ListSharedLineGroups200ApplicationJsonSharedLineGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: ListSharedLineGroups200ApplicationJsonSharedLineGroupsPhoneNumbers }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListSharedLineGroups200ApplicationJsonSharedLineGroupsSite)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJsonSharedLineGroups.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationJsonSharedLineGroups;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJsonSharedLineGroups = ListSharedLineGroups200ApplicationJsonSharedLineGroups;
var ListSharedLineGroups200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJson, _super);
    function ListSharedLineGroups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shared_line_groups", elemType: ListSharedLineGroups200ApplicationJsonSharedLineGroups }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationJson.prototype, "sharedLineGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJson.prototype, "totalRecords", void 0);
    return ListSharedLineGroups200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJson = ListSharedLineGroups200ApplicationJson;
var ListSharedLineGroupsRequest = /** @class */ (function (_super) {
    __extends(ListSharedLineGroupsRequest, _super);
    function ListSharedLineGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharedLineGroupsQueryParams)
    ], ListSharedLineGroupsRequest.prototype, "queryParams", void 0);
    return ListSharedLineGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroupsRequest = ListSharedLineGroupsRequest;
var ListSharedLineGroupsResponse = /** @class */ (function (_super) {
    __extends(ListSharedLineGroupsResponse, _super);
    function ListSharedLineGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListSharedLineGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSharedLineGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharedLineGroups200ApplicationJson)
    ], ListSharedLineGroupsResponse.prototype, "listSharedLineGroups200ApplicationJSONObject", void 0);
    return ListSharedLineGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroupsResponse = ListSharedLineGroupsResponse;
