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
exports.ListCallQueuesResponse = exports.ListCallQueuesRequest = exports.ListCallQueues200ApplicationJson = exports.ListCallQueues200ApplicationJsonCallQueues = exports.ListCallQueues200ApplicationJsonCallQueuesStatusEnum = exports.ListCallQueues200ApplicationJsonCallQueuesSite = exports.ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers = exports.ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum = exports.ListCallQueuesSecurity = exports.ListCallQueuesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListCallQueuesQueryParams = /** @class */ (function (_super) {
    __extends(ListCallQueuesQueryParams, _super);
    function ListCallQueuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCallQueuesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallQueuesQueryParams.prototype, "pageSize", void 0);
    return ListCallQueuesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCallQueuesQueryParams = ListCallQueuesQueryParams;
var ListCallQueuesSecurity = /** @class */ (function (_super) {
    __extends(ListCallQueuesSecurity, _super);
    function ListCallQueuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListCallQueuesSecurity.prototype, "oAuth", void 0);
    return ListCallQueuesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCallQueuesSecurity = ListCallQueuesSecurity;
var ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum;
(function (ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum) {
    ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum["Internal"] = "internal";
    ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum["External"] = "external";
})(ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum = exports.ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum || (exports.ListCallQueues200ApplicationJsonCallQueuesPhoneNumbersSourceEnum = {}));
var ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers, _super);
    function ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers.prototype, "source", void 0);
    return ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers = ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers;
var ListCallQueues200ApplicationJsonCallQueuesSite = /** @class */ (function (_super) {
    __extends(ListCallQueues200ApplicationJsonCallQueuesSite, _super);
    function ListCallQueues200ApplicationJsonCallQueuesSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueuesSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueuesSite.prototype, "name", void 0);
    return ListCallQueues200ApplicationJsonCallQueuesSite;
}(utils_1.SpeakeasyBase));
exports.ListCallQueues200ApplicationJsonCallQueuesSite = ListCallQueues200ApplicationJsonCallQueuesSite;
var ListCallQueues200ApplicationJsonCallQueuesStatusEnum;
(function (ListCallQueues200ApplicationJsonCallQueuesStatusEnum) {
    ListCallQueues200ApplicationJsonCallQueuesStatusEnum["Active"] = "active";
    ListCallQueues200ApplicationJsonCallQueuesStatusEnum["Inactive"] = "inactive";
})(ListCallQueues200ApplicationJsonCallQueuesStatusEnum = exports.ListCallQueues200ApplicationJsonCallQueuesStatusEnum || (exports.ListCallQueues200ApplicationJsonCallQueuesStatusEnum = {}));
var ListCallQueues200ApplicationJsonCallQueues = /** @class */ (function (_super) {
    __extends(ListCallQueues200ApplicationJsonCallQueues, _super);
    function ListCallQueues200ApplicationJsonCallQueues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: ListCallQueues200ApplicationJsonCallQueuesPhoneNumbers }),
        __metadata("design:type", Array)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListCallQueues200ApplicationJsonCallQueuesSite)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJsonCallQueues.prototype, "status", void 0);
    return ListCallQueues200ApplicationJsonCallQueues;
}(utils_1.SpeakeasyBase));
exports.ListCallQueues200ApplicationJsonCallQueues = ListCallQueues200ApplicationJsonCallQueues;
var ListCallQueues200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCallQueues200ApplicationJson, _super);
    function ListCallQueues200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_queues", elemType: ListCallQueues200ApplicationJsonCallQueues }),
        __metadata("design:type", Array)
    ], ListCallQueues200ApplicationJson.prototype, "callQueues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCallQueues200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallQueues200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListCallQueues200ApplicationJson.prototype, "totalRecords", void 0);
    return ListCallQueues200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCallQueues200ApplicationJson = ListCallQueues200ApplicationJson;
var ListCallQueuesRequest = /** @class */ (function (_super) {
    __extends(ListCallQueuesRequest, _super);
    function ListCallQueuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallQueuesQueryParams)
    ], ListCallQueuesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallQueuesSecurity)
    ], ListCallQueuesRequest.prototype, "security", void 0);
    return ListCallQueuesRequest;
}(utils_1.SpeakeasyBase));
exports.ListCallQueuesRequest = ListCallQueuesRequest;
var ListCallQueuesResponse = /** @class */ (function (_super) {
    __extends(ListCallQueuesResponse, _super);
    function ListCallQueuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListCallQueuesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCallQueuesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCallQueuesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCallQueues200ApplicationJson)
    ], ListCallQueuesResponse.prototype, "listCallQueues200ApplicationJSONObject", void 0);
    return ListCallQueuesResponse;
}(utils_1.SpeakeasyBase));
exports.ListCallQueuesResponse = ListCallQueuesResponse;
