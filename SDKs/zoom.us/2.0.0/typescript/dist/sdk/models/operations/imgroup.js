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
exports.ImGroupResponse = exports.ImGroupRequest = exports.ImGroup200ApplicationJson = exports.ImGroup200ApplicationJsonTypeEnum = exports.ImGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ImGroupPathParams = /** @class */ (function (_super) {
    __extends(ImGroupPathParams, _super);
    function ImGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], ImGroupPathParams.prototype, "groupId", void 0);
    return ImGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.ImGroupPathParams = ImGroupPathParams;
var ImGroup200ApplicationJsonTypeEnum;
(function (ImGroup200ApplicationJsonTypeEnum) {
    ImGroup200ApplicationJsonTypeEnum["Normal"] = "normal";
    ImGroup200ApplicationJsonTypeEnum["Shared"] = "shared";
    ImGroup200ApplicationJsonTypeEnum["Restricted"] = "restricted";
})(ImGroup200ApplicationJsonTypeEnum = exports.ImGroup200ApplicationJsonTypeEnum || (exports.ImGroup200ApplicationJsonTypeEnum = {}));
// ImGroup200ApplicationJson
/**
 * Group object.
**/
var ImGroup200ApplicationJson = /** @class */ (function (_super) {
    __extends(ImGroup200ApplicationJson, _super);
    function ImGroup200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroup200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImGroup200ApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroup200ApplicationJson.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroup200ApplicationJson.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroup200ApplicationJson.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], ImGroup200ApplicationJson.prototype, "totalMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImGroup200ApplicationJson.prototype, "type", void 0);
    return ImGroup200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ImGroup200ApplicationJson = ImGroup200ApplicationJson;
var ImGroupRequest = /** @class */ (function (_super) {
    __extends(ImGroupRequest, _super);
    function ImGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupPathParams)
    ], ImGroupRequest.prototype, "pathParams", void 0);
    return ImGroupRequest;
}(utils_1.SpeakeasyBase));
exports.ImGroupRequest = ImGroupRequest;
var ImGroupResponse = /** @class */ (function (_super) {
    __extends(ImGroupResponse, _super);
    function ImGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroup200ApplicationJson)
    ], ImGroupResponse.prototype, "imGroup200ApplicationJSONObject", void 0);
    return ImGroupResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupResponse = ImGroupResponse;
