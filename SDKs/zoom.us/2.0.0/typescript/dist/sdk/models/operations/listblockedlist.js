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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBlockedListResponse = exports.ListBlockedListRequest = exports.ListBlockedList200ApplicationJson = exports.ListBlockedList200ApplicationJsonBlockedList = exports.ListBlockedList200ApplicationJsonBlockedListStatusEnum = exports.ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum = exports.ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum = exports.ListBlockedListSecurity = exports.ListBlockedListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListBlockedListQueryParams = /** @class */ (function (_super) {
    __extends(ListBlockedListQueryParams, _super);
    function ListBlockedListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListBlockedListQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListBlockedListQueryParams.prototype, "pageSize", void 0);
    return ListBlockedListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListBlockedListQueryParams = ListBlockedListQueryParams;
var ListBlockedListSecurity = /** @class */ (function (_super) {
    __extends(ListBlockedListSecurity, _super);
    function ListBlockedListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListBlockedListSecurity.prototype, "oAuth", void 0);
    return ListBlockedListSecurity;
}(utils_1.SpeakeasyBase));
exports.ListBlockedListSecurity = ListBlockedListSecurity;
var ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum;
(function (ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum) {
    ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum["Inbound"] = "inbound";
    ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum["Outbound"] = "outbound";
})(ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum = exports.ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum || (exports.ListBlockedList200ApplicationJsonBlockedListBlockTypeEnum = {}));
var ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum;
(function (ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum) {
    ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum["PhoneNumber"] = "phoneNumber";
    ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum["Prefix"] = "prefix";
})(ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum = exports.ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum || (exports.ListBlockedList200ApplicationJsonBlockedListMatchTypeEnum = {}));
var ListBlockedList200ApplicationJsonBlockedListStatusEnum;
(function (ListBlockedList200ApplicationJsonBlockedListStatusEnum) {
    ListBlockedList200ApplicationJsonBlockedListStatusEnum["Active"] = "active";
    ListBlockedList200ApplicationJsonBlockedListStatusEnum["Inactive"] = "inactive";
})(ListBlockedList200ApplicationJsonBlockedListStatusEnum = exports.ListBlockedList200ApplicationJsonBlockedListStatusEnum || (exports.ListBlockedList200ApplicationJsonBlockedListStatusEnum = {}));
var ListBlockedList200ApplicationJsonBlockedList = /** @class */ (function (_super) {
    __extends(ListBlockedList200ApplicationJsonBlockedList, _super);
    function ListBlockedList200ApplicationJsonBlockedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_type" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "blockType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=match_type" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "matchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJsonBlockedList.prototype, "status", void 0);
    return ListBlockedList200ApplicationJsonBlockedList;
}(utils_1.SpeakeasyBase));
exports.ListBlockedList200ApplicationJsonBlockedList = ListBlockedList200ApplicationJsonBlockedList;
var ListBlockedList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListBlockedList200ApplicationJson, _super);
    function ListBlockedList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blocked_list", elemType: ListBlockedList200ApplicationJsonBlockedList }),
        __metadata("design:type", Array)
    ], ListBlockedList200ApplicationJson.prototype, "blockedList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListBlockedList200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListBlockedList200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListBlockedList200ApplicationJson.prototype, "totalRecords", void 0);
    return ListBlockedList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListBlockedList200ApplicationJson = ListBlockedList200ApplicationJson;
var ListBlockedListRequest = /** @class */ (function (_super) {
    __extends(ListBlockedListRequest, _super);
    function ListBlockedListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBlockedListQueryParams)
    ], ListBlockedListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBlockedListSecurity)
    ], ListBlockedListRequest.prototype, "security", void 0);
    return ListBlockedListRequest;
}(utils_1.SpeakeasyBase));
exports.ListBlockedListRequest = ListBlockedListRequest;
var ListBlockedListResponse = /** @class */ (function (_super) {
    __extends(ListBlockedListResponse, _super);
    function ListBlockedListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListBlockedListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBlockedListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBlockedListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBlockedList200ApplicationJson)
    ], ListBlockedListResponse.prototype, "listBlockedList200ApplicationJSONObject", void 0);
    return ListBlockedListResponse;
}(utils_1.SpeakeasyBase));
exports.ListBlockedListResponse = ListBlockedListResponse;
