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
exports.ListDigitalSignageContentResponse = exports.ListDigitalSignageContentRequest = exports.ListDigitalSignageContent200ApplicationJson = exports.ListDigitalSignageContent200ApplicationJsonContents = exports.ListDigitalSignageContentQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var ListDigitalSignageContentQueryParams = /** @class */ (function (_super) {
    __extends(ListDigitalSignageContentQueryParams, _super);
    function ListDigitalSignageContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=folder_id" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContentQueryParams.prototype, "folderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContentQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListDigitalSignageContentQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContentQueryParams.prototype, "type", void 0);
    return ListDigitalSignageContentQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDigitalSignageContentQueryParams = ListDigitalSignageContentQueryParams;
var ListDigitalSignageContent200ApplicationJsonContents = /** @class */ (function (_super) {
    __extends(ListDigitalSignageContent200ApplicationJsonContents, _super);
    function ListDigitalSignageContent200ApplicationJsonContents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContent200ApplicationJsonContents.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContent200ApplicationJsonContents.prototype, "name", void 0);
    return ListDigitalSignageContent200ApplicationJsonContents;
}(utils_1.SpeakeasyBase));
exports.ListDigitalSignageContent200ApplicationJsonContents = ListDigitalSignageContent200ApplicationJsonContents;
var ListDigitalSignageContent200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDigitalSignageContent200ApplicationJson, _super);
    function ListDigitalSignageContent200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents", elemType: ListDigitalSignageContent200ApplicationJsonContents }),
        __metadata("design:type", Array)
    ], ListDigitalSignageContent200ApplicationJson.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListDigitalSignageContent200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListDigitalSignageContent200ApplicationJson.prototype, "pageSize", void 0);
    return ListDigitalSignageContent200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDigitalSignageContent200ApplicationJson = ListDigitalSignageContent200ApplicationJson;
var ListDigitalSignageContentRequest = /** @class */ (function (_super) {
    __extends(ListDigitalSignageContentRequest, _super);
    function ListDigitalSignageContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDigitalSignageContentQueryParams)
    ], ListDigitalSignageContentRequest.prototype, "queryParams", void 0);
    return ListDigitalSignageContentRequest;
}(utils_1.SpeakeasyBase));
exports.ListDigitalSignageContentRequest = ListDigitalSignageContentRequest;
var ListDigitalSignageContentResponse = /** @class */ (function (_super) {
    __extends(ListDigitalSignageContentResponse, _super);
    function ListDigitalSignageContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListDigitalSignageContentResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDigitalSignageContentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDigitalSignageContentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDigitalSignageContent200ApplicationJson)
    ], ListDigitalSignageContentResponse.prototype, "listDigitalSignageContent200ApplicationJSONObject", void 0);
    return ListDigitalSignageContentResponse;
}(utils_1.SpeakeasyBase));
exports.ListDigitalSignageContentResponse = ListDigitalSignageContentResponse;
