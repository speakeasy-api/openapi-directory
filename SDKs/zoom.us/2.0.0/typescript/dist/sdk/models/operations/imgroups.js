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
exports.ImGroupsResponse = exports.ImGroupsImGroupList = exports.ImGroupsImGroupListGroups = exports.ImGroupsImGroupListGroupsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ImGroupsImGroupListGroupsTypeEnum;
(function (ImGroupsImGroupListGroupsTypeEnum) {
    ImGroupsImGroupListGroupsTypeEnum["Normal"] = "normal";
    ImGroupsImGroupListGroupsTypeEnum["Shared"] = "shared";
    ImGroupsImGroupListGroupsTypeEnum["Restricted"] = "restricted";
})(ImGroupsImGroupListGroupsTypeEnum = exports.ImGroupsImGroupListGroupsTypeEnum || (exports.ImGroupsImGroupListGroupsTypeEnum = {}));
// ImGroupsImGroupListGroups
/**
 * Group object.
**/
var ImGroupsImGroupListGroups = /** @class */ (function (_super) {
    __extends(ImGroupsImGroupListGroups, _super);
    function ImGroupsImGroupListGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImGroupsImGroupListGroups.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImGroupsImGroupListGroups.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupsImGroupListGroups.prototype, "searchByAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_domain" }),
        __metadata("design:type", Boolean)
    ], ImGroupsImGroupListGroups.prototype, "searchByDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_by_ma_account" }),
        __metadata("design:type", Boolean)
    ], ImGroupsImGroupListGroups.prototype, "searchByMaAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_members" }),
        __metadata("design:type", Number)
    ], ImGroupsImGroupListGroups.prototype, "totalMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ImGroupsImGroupListGroups.prototype, "type", void 0);
    return ImGroupsImGroupListGroups;
}(utils_1.SpeakeasyBase));
exports.ImGroupsImGroupListGroups = ImGroupsImGroupListGroups;
// ImGroupsImGroupList
/**
 * List of IM Groups.
**/
var ImGroupsImGroupList = /** @class */ (function (_super) {
    __extends(ImGroupsImGroupList, _super);
    function ImGroupsImGroupList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups", elemType: ImGroupsImGroupListGroups }),
        __metadata("design:type", Array)
    ], ImGroupsImGroupList.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ImGroupsImGroupList.prototype, "totalRecords", void 0);
    return ImGroupsImGroupList;
}(utils_1.SpeakeasyBase));
exports.ImGroupsImGroupList = ImGroupsImGroupList;
var ImGroupsResponse = /** @class */ (function (_super) {
    __extends(ImGroupsResponse, _super);
    function ImGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ImGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImGroupsImGroupList)
    ], ImGroupsResponse.prototype, "imGroupList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImGroupsResponse.prototype, "statusCode", void 0);
    return ImGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.ImGroupsResponse = ImGroupsResponse;
