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
exports.MeetingRecordingRegistrantStatusResponse = exports.MeetingRecordingRegistrantStatusRequest = exports.MeetingRecordingRegistrantStatusSecurity = exports.MeetingRecordingRegistrantStatusRequests = exports.MeetingRecordingRegistrantStatusMultipartFormData = exports.MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = exports.MeetingRecordingRegistrantStatusApplicationJson = exports.MeetingRecordingRegistrantStatusApplicationJsonActionEnum = exports.MeetingRecordingRegistrantStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRecordingRegistrantStatusPathParams = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusPathParams, _super);
    function MeetingRecordingRegistrantStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantStatusPathParams.prototype, "meetingId", void 0);
    return MeetingRecordingRegistrantStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusPathParams = MeetingRecordingRegistrantStatusPathParams;
var MeetingRecordingRegistrantStatusApplicationJsonActionEnum;
(function (MeetingRecordingRegistrantStatusApplicationJsonActionEnum) {
    MeetingRecordingRegistrantStatusApplicationJsonActionEnum["Approve"] = "approve";
    MeetingRecordingRegistrantStatusApplicationJsonActionEnum["Deny"] = "deny";
})(MeetingRecordingRegistrantStatusApplicationJsonActionEnum = exports.MeetingRecordingRegistrantStatusApplicationJsonActionEnum || (exports.MeetingRecordingRegistrantStatusApplicationJsonActionEnum = {}));
// MeetingRecordingRegistrantStatusApplicationJson
/**
 * Registrant Status
**/
var MeetingRecordingRegistrantStatusApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusApplicationJson, _super);
    function MeetingRecordingRegistrantStatusApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantStatusApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants" }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantStatusApplicationJson.prototype, "registrants", void 0);
    return MeetingRecordingRegistrantStatusApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusApplicationJson = MeetingRecordingRegistrantStatusApplicationJson;
var MeetingRecordingRegistrantStatusMultipartFormDataActionEnum;
(function (MeetingRecordingRegistrantStatusMultipartFormDataActionEnum) {
    MeetingRecordingRegistrantStatusMultipartFormDataActionEnum["Approve"] = "approve";
    MeetingRecordingRegistrantStatusMultipartFormDataActionEnum["Deny"] = "deny";
})(MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = exports.MeetingRecordingRegistrantStatusMultipartFormDataActionEnum || (exports.MeetingRecordingRegistrantStatusMultipartFormDataActionEnum = {}));
// MeetingRecordingRegistrantStatusMultipartFormData
/**
 * Registrant Status
**/
var MeetingRecordingRegistrantStatusMultipartFormData = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusMultipartFormData, _super);
    function MeetingRecordingRegistrantStatusMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantStatusMultipartFormData.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registrants;json=true" }),
        __metadata("design:type", Array)
    ], MeetingRecordingRegistrantStatusMultipartFormData.prototype, "registrants", void 0);
    return MeetingRecordingRegistrantStatusMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusMultipartFormData = MeetingRecordingRegistrantStatusMultipartFormData;
var MeetingRecordingRegistrantStatusRequests = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusRequests, _super);
    function MeetingRecordingRegistrantStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingRecordingRegistrantStatusApplicationJson)
    ], MeetingRecordingRegistrantStatusRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingRecordingRegistrantStatusMultipartFormData)
    ], MeetingRecordingRegistrantStatusRequests.prototype, "object1", void 0);
    return MeetingRecordingRegistrantStatusRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusRequests = MeetingRecordingRegistrantStatusRequests;
var MeetingRecordingRegistrantStatusSecurity = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusSecurity, _super);
    function MeetingRecordingRegistrantStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRecordingRegistrantStatusSecurity.prototype, "oAuth", void 0);
    return MeetingRecordingRegistrantStatusSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusSecurity = MeetingRecordingRegistrantStatusSecurity;
var MeetingRecordingRegistrantStatusRequest = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusRequest, _super);
    function MeetingRecordingRegistrantStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantStatusPathParams)
    ], MeetingRecordingRegistrantStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantStatusRequests)
    ], MeetingRecordingRegistrantStatusRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRecordingRegistrantStatusSecurity)
    ], MeetingRecordingRegistrantStatusRequest.prototype, "security", void 0);
    return MeetingRecordingRegistrantStatusRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusRequest = MeetingRecordingRegistrantStatusRequest;
var MeetingRecordingRegistrantStatusResponse = /** @class */ (function (_super) {
    __extends(MeetingRecordingRegistrantStatusResponse, _super);
    function MeetingRecordingRegistrantStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRecordingRegistrantStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRecordingRegistrantStatusResponse.prototype, "statusCode", void 0);
    return MeetingRecordingRegistrantStatusResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRecordingRegistrantStatusResponse = MeetingRecordingRegistrantStatusResponse;
