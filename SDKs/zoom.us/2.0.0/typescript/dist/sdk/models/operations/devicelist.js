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
exports.DeviceListResponse = exports.DeviceListRequest = exports.DeviceListH323SipDeviceList = exports.DeviceListH323SipDeviceListTheH323SipDeviceObject = exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = exports.DeviceListSecurity = exports.DeviceListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeviceListQueryParams = /** @class */ (function (_super) {
    __extends(DeviceListQueryParams, _super);
    function DeviceListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], DeviceListQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_number" }),
        __metadata("design:type", Number)
    ], DeviceListQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], DeviceListQueryParams.prototype, "pageSize", void 0);
    return DeviceListQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeviceListQueryParams = DeviceListQueryParams;
var DeviceListSecurity = /** @class */ (function (_super) {
    __extends(DeviceListSecurity, _super);
    function DeviceListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DeviceListSecurity.prototype, "oAuth", void 0);
    return DeviceListSecurity;
}(utils_1.SpeakeasyBase));
exports.DeviceListSecurity = DeviceListSecurity;
var DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum;
(function (DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum) {
    DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum["Auto"] = "auto";
    DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum["Yes"] = "yes";
    DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum["No"] = "no";
})(DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum || (exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = {}));
var DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum;
(function (DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum) {
    DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum["H323"] = "H.323";
    DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum["Sip"] = "SIP";
})(DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum || (exports.DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = {}));
// DeviceListH323SipDeviceListTheH323SipDeviceObject
/**
 * The H.323/SIP device object.
**/
var DeviceListH323SipDeviceListTheH323SipDeviceObject = /** @class */ (function (_super) {
    __extends(DeviceListH323SipDeviceListTheH323SipDeviceObject, _super);
    function DeviceListH323SipDeviceListTheH323SipDeviceObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryption" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceListTheH323SipDeviceObject.prototype, "encryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceListTheH323SipDeviceObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceListTheH323SipDeviceObject.prototype, "ip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceListTheH323SipDeviceObject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceListTheH323SipDeviceObject.prototype, "protocol", void 0);
    return DeviceListH323SipDeviceListTheH323SipDeviceObject;
}(utils_1.SpeakeasyBase));
exports.DeviceListH323SipDeviceListTheH323SipDeviceObject = DeviceListH323SipDeviceListTheH323SipDeviceObject;
// DeviceListH323SipDeviceList
/**
 * Pagination Object.
**/
var DeviceListH323SipDeviceList = /** @class */ (function (_super) {
    __extends(DeviceListH323SipDeviceList, _super);
    function DeviceListH323SipDeviceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=devices", elemType: DeviceListH323SipDeviceListTheH323SipDeviceObject }),
        __metadata("design:type", Array)
    ], DeviceListH323SipDeviceList.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], DeviceListH323SipDeviceList.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_count" }),
        __metadata("design:type", Number)
    ], DeviceListH323SipDeviceList.prototype, "pageCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_number" }),
        __metadata("design:type", Number)
    ], DeviceListH323SipDeviceList.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], DeviceListH323SipDeviceList.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DeviceListH323SipDeviceList.prototype, "totalRecords", void 0);
    return DeviceListH323SipDeviceList;
}(utils_1.SpeakeasyBase));
exports.DeviceListH323SipDeviceList = DeviceListH323SipDeviceList;
var DeviceListRequest = /** @class */ (function (_super) {
    __extends(DeviceListRequest, _super);
    function DeviceListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceListQueryParams)
    ], DeviceListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceListSecurity)
    ], DeviceListRequest.prototype, "security", void 0);
    return DeviceListRequest;
}(utils_1.SpeakeasyBase));
exports.DeviceListRequest = DeviceListRequest;
var DeviceListResponse = /** @class */ (function (_super) {
    __extends(DeviceListResponse, _super);
    function DeviceListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DeviceListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeviceListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeviceListH323SipDeviceList)
    ], DeviceListResponse.prototype, "h323SIPDeviceList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeviceListResponse.prototype, "statusCode", void 0);
    return DeviceListResponse;
}(utils_1.SpeakeasyBase));
exports.DeviceListResponse = DeviceListResponse;
