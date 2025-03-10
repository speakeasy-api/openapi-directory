"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ListSharedLineGroupsResponse = exports.ListSharedLineGroups200ApplicationJSON = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroups = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroups200ApplicationXML = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroups = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroupsRequest = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var ListSharedLineGroupsRequest = /** @class */ (function (_super) {
    __extends(ListSharedLineGroupsRequest, _super);
    function ListSharedLineGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=next_page_token",
        }),
        __metadata("design:type", String)
    ], ListSharedLineGroupsRequest.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=page_size",
        }),
        __metadata("design:type", Number)
    ], ListSharedLineGroupsRequest.prototype, "pageSize", void 0);
    return ListSharedLineGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroupsRequest = ListSharedLineGroupsRequest;
/**
 * Status of the number.
 */
var ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum;
(function (ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum) {
    ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum["Pending"] = "pending";
    ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum["Available"] = "available";
})(ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum || (exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbersStatusEnum = {}));
var ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers, _super);
    function ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers = ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers;
var ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite, _super);
    function ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite.prototype, "name", void 0);
    return ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite = ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite;
/**
 * Status of the Shared Line Group.
 */
var ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum;
(function (ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum) {
    ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum["Active"] = "active";
    ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum["Inactive"] = "inactive";
})(ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum || (exports.ListSharedLineGroups200ApplicationXMLSharedLineGroupsStatusEnum = {}));
var ListSharedLineGroups200ApplicationXMLSharedLineGroups = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationXMLSharedLineGroups, _super);
    function ListSharedLineGroups200ApplicationXMLSharedLineGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: ListSharedLineGroups200ApplicationXMLSharedLineGroupsPhoneNumbers,
        }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharedLineGroups200ApplicationXMLSharedLineGroupsSite)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXMLSharedLineGroups.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationXMLSharedLineGroups;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationXMLSharedLineGroups = ListSharedLineGroups200ApplicationXMLSharedLineGroups;
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Shared Line Groups returned.
 */
var ListSharedLineGroups200ApplicationXML = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationXML, _super);
    function ListSharedLineGroups200ApplicationXML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationXML.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationXML.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: ListSharedLineGroups200ApplicationXMLSharedLineGroups,
        }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationXML.prototype, "sharedLineGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationXML.prototype, "totalRecords", void 0);
    return ListSharedLineGroups200ApplicationXML;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationXML = ListSharedLineGroups200ApplicationXML;
/**
 * Status of the number.
 */
var ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum;
(function (ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum) {
    ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum["Pending"] = "pending";
    ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum["Available"] = "available";
})(ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum || (exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbersStatusEnum = {}));
var ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers, _super);
    function ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "number" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers = ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers;
var ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite, _super);
    function ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite.prototype, "name", void 0);
    return ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite = ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite;
/**
 * Status of the Shared Line Group.
 */
var ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum;
(function (ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum) {
    ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum["Active"] = "active";
    ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum["Inactive"] = "inactive";
})(ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum = exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum || (exports.ListSharedLineGroups200ApplicationJSONSharedLineGroupsStatusEnum = {}));
var ListSharedLineGroups200ApplicationJSONSharedLineGroups = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJSONSharedLineGroups, _super);
    function ListSharedLineGroups200ApplicationJSONSharedLineGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "display_name" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "extension_number" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers,
        }),
        (0, class_transformer_1.Expose)({ name: "phone_numbers" }),
        (0, class_transformer_1.Type)(function () { return ListSharedLineGroups200ApplicationJSONSharedLineGroupsPhoneNumbers; }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "site" }),
        (0, class_transformer_1.Type)(function () { return ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite; }),
        __metadata("design:type", ListSharedLineGroups200ApplicationJSONSharedLineGroupsSite)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSONSharedLineGroups.prototype, "status", void 0);
    return ListSharedLineGroups200ApplicationJSONSharedLineGroups;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJSONSharedLineGroups = ListSharedLineGroups200ApplicationJSONSharedLineGroups;
/**
 * **HTTP Status Code:** `200` **OK** <br>
 *
 * @remarks
 * Shared Line Groups returned.
 */
var ListSharedLineGroups200ApplicationJSON = /** @class */ (function (_super) {
    __extends(ListSharedLineGroups200ApplicationJSON, _super);
    function ListSharedLineGroups200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "next_page_token" }),
        __metadata("design:type", String)
    ], ListSharedLineGroups200ApplicationJSON.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "page_size" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJSON.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: ListSharedLineGroups200ApplicationJSONSharedLineGroups,
        }),
        (0, class_transformer_1.Expose)({ name: "shared_line_groups" }),
        (0, class_transformer_1.Type)(function () { return ListSharedLineGroups200ApplicationJSONSharedLineGroups; }),
        __metadata("design:type", Array)
    ], ListSharedLineGroups200ApplicationJSON.prototype, "sharedLineGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "total_records" }),
        __metadata("design:type", Number)
    ], ListSharedLineGroups200ApplicationJSON.prototype, "totalRecords", void 0);
    return ListSharedLineGroups200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroups200ApplicationJSON = ListSharedLineGroups200ApplicationJSON;
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
        __metadata("design:type", Object)
    ], ListSharedLineGroupsResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharedLineGroups200ApplicationJSON)
    ], ListSharedLineGroupsResponse.prototype, "listSharedLineGroups200ApplicationJSONObject", void 0);
    return ListSharedLineGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.ListSharedLineGroupsResponse = ListSharedLineGroupsResponse;
