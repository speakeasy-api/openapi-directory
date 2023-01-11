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
exports.ListAccountPhoneNumbersResponse = exports.ListAccountPhoneNumbersRequest = exports.ListAccountPhoneNumbers200ApplicationJson = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum = exports.ListAccountPhoneNumbersSecurity = exports.ListAccountPhoneNumbersQueryParams = exports.ListAccountPhoneNumbersTypeEnum = exports.ListAccountPhoneNumbersNumberTypeEnum = exports.ListAccountPhoneNumbersExtensionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAccountPhoneNumbersExtensionTypeEnum;
(function (ListAccountPhoneNumbersExtensionTypeEnum) {
    ListAccountPhoneNumbersExtensionTypeEnum["User"] = "user";
    ListAccountPhoneNumbersExtensionTypeEnum["CallQueue"] = "callQueue";
    ListAccountPhoneNumbersExtensionTypeEnum["AutoReceptionist"] = "autoReceptionist";
    ListAccountPhoneNumbersExtensionTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
})(ListAccountPhoneNumbersExtensionTypeEnum = exports.ListAccountPhoneNumbersExtensionTypeEnum || (exports.ListAccountPhoneNumbersExtensionTypeEnum = {}));
var ListAccountPhoneNumbersNumberTypeEnum;
(function (ListAccountPhoneNumbersNumberTypeEnum) {
    ListAccountPhoneNumbersNumberTypeEnum["Toll"] = "toll";
    ListAccountPhoneNumbersNumberTypeEnum["Tollfree"] = "tollfree";
})(ListAccountPhoneNumbersNumberTypeEnum = exports.ListAccountPhoneNumbersNumberTypeEnum || (exports.ListAccountPhoneNumbersNumberTypeEnum = {}));
var ListAccountPhoneNumbersTypeEnum;
(function (ListAccountPhoneNumbersTypeEnum) {
    ListAccountPhoneNumbersTypeEnum["Assigned"] = "assigned";
    ListAccountPhoneNumbersTypeEnum["Unassigned"] = "unassigned";
    ListAccountPhoneNumbersTypeEnum["All"] = "all";
})(ListAccountPhoneNumbersTypeEnum = exports.ListAccountPhoneNumbersTypeEnum || (exports.ListAccountPhoneNumbersTypeEnum = {}));
var ListAccountPhoneNumbersQueryParams = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbersQueryParams, _super);
    function ListAccountPhoneNumbersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=extension_type" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersQueryParams.prototype, "extensionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=number_type" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersQueryParams.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListAccountPhoneNumbersQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pending_numbers" }),
        __metadata("design:type", Boolean)
    ], ListAccountPhoneNumbersQueryParams.prototype, "pendingNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersQueryParams.prototype, "siteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersQueryParams.prototype, "type", void 0);
    return ListAccountPhoneNumbersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbersQueryParams = ListAccountPhoneNumbersQueryParams;
var ListAccountPhoneNumbersSecurity = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbersSecurity, _super);
    function ListAccountPhoneNumbersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListAccountPhoneNumbersSecurity.prototype, "oAuth", void 0);
    return ListAccountPhoneNumbersSecurity;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbersSecurity = ListAccountPhoneNumbersSecurity;
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum;
(function (ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum) {
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum["User"] = "user";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum["CallQueue"] = "callQueue";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum["AutoReceptionist"] = "autoReceptionist";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum["CommonAreaPhone"] = "commonAreaPhone";
})(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum || (exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssigneeTypeEnum = {}));
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee, _super);
    function ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee.prototype, "type", void 0);
    return ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee = ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee;
// ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier
/**
 * Displayed when the `type` request parameter is `byoc`.
**/
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier, _super);
    function ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier.prototype, "name", void 0);
    return ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier = ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier;
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum;
(function (ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum) {
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum["Toll"] = "toll";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum["Tollfree"] = "tollfree";
})(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum || (exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersNumberTypeEnum = {}));
// ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup
/**
 * Displayed when the `type` request parameter is `byoc`.
**/
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup, _super);
    function ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup.prototype, "name", void 0);
    return ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup = ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup;
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite, _super);
    function ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite.prototype, "name", void 0);
    return ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite = ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite;
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum;
(function (ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum) {
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum["Internal"] = "internal";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum["External"] = "external";
})(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum || (exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSourceEnum = {}));
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum;
(function (ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum) {
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum["Pending"] = "pending";
    ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum["Available"] = "available";
})(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum = exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum || (exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersStatusEnum = {}));
var ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers, _super);
    function ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assignee" }),
        __metadata("design:type", ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersAssignee)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capability" }),
        __metadata("design:type", Array)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "capability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier" }),
        __metadata("design:type", ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersCarrier)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "carrier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_type" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "numberType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sip_group" }),
        __metadata("design:type", ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSipGroup)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "sipGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListAccountPhoneNumbers200ApplicationJsonPhoneNumbersSite)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers.prototype, "status", void 0);
    return ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers = ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers;
var ListAccountPhoneNumbers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbers200ApplicationJson, _super);
    function ListAccountPhoneNumbers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbers200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAccountPhoneNumbers200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: ListAccountPhoneNumbers200ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], ListAccountPhoneNumbers200ApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListAccountPhoneNumbers200ApplicationJson.prototype, "totalRecords", void 0);
    return ListAccountPhoneNumbers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbers200ApplicationJson = ListAccountPhoneNumbers200ApplicationJson;
var ListAccountPhoneNumbersRequest = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbersRequest, _super);
    function ListAccountPhoneNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountPhoneNumbersQueryParams)
    ], ListAccountPhoneNumbersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountPhoneNumbersSecurity)
    ], ListAccountPhoneNumbersRequest.prototype, "security", void 0);
    return ListAccountPhoneNumbersRequest;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbersRequest = ListAccountPhoneNumbersRequest;
var ListAccountPhoneNumbersResponse = /** @class */ (function (_super) {
    __extends(ListAccountPhoneNumbersResponse, _super);
    function ListAccountPhoneNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListAccountPhoneNumbersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAccountPhoneNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAccountPhoneNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAccountPhoneNumbers200ApplicationJson)
    ], ListAccountPhoneNumbersResponse.prototype, "listAccountPhoneNumbers200ApplicationJSONObject", void 0);
    return ListAccountPhoneNumbersResponse;
}(utils_1.SpeakeasyBase));
exports.ListAccountPhoneNumbersResponse = ListAccountPhoneNumbersResponse;
