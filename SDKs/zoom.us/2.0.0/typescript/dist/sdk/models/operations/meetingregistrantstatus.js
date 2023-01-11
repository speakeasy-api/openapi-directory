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
exports.MeetingRegistrantStatusResponse = exports.MeetingRegistrantStatusRequest = exports.MeetingRegistrantStatusSecurity = exports.MeetingRegistrantStatusRequests = exports.MeetingRegistrantStatusMultipartFormData1 = exports.MeetingRegistrantStatusMultipartFormDataRegistrants = exports.MeetingRegistrantStatusMultipartFormDataActionEnum = exports.MeetingRegistrantStatusApplicationJson = exports.MeetingRegistrantStatusApplicationJsonRegistrants = exports.MeetingRegistrantStatusApplicationJsonActionEnum = exports.MeetingRegistrantStatusQueryParams = exports.MeetingRegistrantStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MeetingRegistrantStatusPathParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusPathParams, _super);
    function MeetingRegistrantStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meetingId" }),
        __metadata("design:type", Number)
    ], MeetingRegistrantStatusPathParams.prototype, "meetingId", void 0);
    return MeetingRegistrantStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusPathParams = MeetingRegistrantStatusPathParams;
var MeetingRegistrantStatusQueryParams = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusQueryParams, _super);
    function MeetingRegistrantStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusQueryParams.prototype, "occurrenceId", void 0);
    return MeetingRegistrantStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusQueryParams = MeetingRegistrantStatusQueryParams;
var MeetingRegistrantStatusApplicationJsonActionEnum;
(function (MeetingRegistrantStatusApplicationJsonActionEnum) {
    MeetingRegistrantStatusApplicationJsonActionEnum["Approve"] = "approve";
    MeetingRegistrantStatusApplicationJsonActionEnum["Cancel"] = "cancel";
    MeetingRegistrantStatusApplicationJsonActionEnum["Deny"] = "deny";
})(MeetingRegistrantStatusApplicationJsonActionEnum = exports.MeetingRegistrantStatusApplicationJsonActionEnum || (exports.MeetingRegistrantStatusApplicationJsonActionEnum = {}));
var MeetingRegistrantStatusApplicationJsonRegistrants = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusApplicationJsonRegistrants, _super);
    function MeetingRegistrantStatusApplicationJsonRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusApplicationJsonRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusApplicationJsonRegistrants.prototype, "id", void 0);
    return MeetingRegistrantStatusApplicationJsonRegistrants;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusApplicationJsonRegistrants = MeetingRegistrantStatusApplicationJsonRegistrants;
var MeetingRegistrantStatusApplicationJson = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusApplicationJson, _super);
    function MeetingRegistrantStatusApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: MeetingRegistrantStatusApplicationJsonRegistrants }),
        __metadata("design:type", Array)
    ], MeetingRegistrantStatusApplicationJson.prototype, "registrants", void 0);
    return MeetingRegistrantStatusApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusApplicationJson = MeetingRegistrantStatusApplicationJson;
var MeetingRegistrantStatusMultipartFormDataActionEnum;
(function (MeetingRegistrantStatusMultipartFormDataActionEnum) {
    MeetingRegistrantStatusMultipartFormDataActionEnum["Approve"] = "approve";
    MeetingRegistrantStatusMultipartFormDataActionEnum["Cancel"] = "cancel";
    MeetingRegistrantStatusMultipartFormDataActionEnum["Deny"] = "deny";
})(MeetingRegistrantStatusMultipartFormDataActionEnum = exports.MeetingRegistrantStatusMultipartFormDataActionEnum || (exports.MeetingRegistrantStatusMultipartFormDataActionEnum = {}));
var MeetingRegistrantStatusMultipartFormDataRegistrants = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusMultipartFormDataRegistrants, _super);
    function MeetingRegistrantStatusMultipartFormDataRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusMultipartFormDataRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusMultipartFormDataRegistrants.prototype, "id", void 0);
    return MeetingRegistrantStatusMultipartFormDataRegistrants;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusMultipartFormDataRegistrants = MeetingRegistrantStatusMultipartFormDataRegistrants;
var MeetingRegistrantStatusMultipartFormData1 = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusMultipartFormData1, _super);
    function MeetingRegistrantStatusMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusMultipartFormData1.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registrants;json=true", elemType: MeetingRegistrantStatusMultipartFormDataRegistrants }),
        __metadata("design:type", Array)
    ], MeetingRegistrantStatusMultipartFormData1.prototype, "registrants", void 0);
    return MeetingRegistrantStatusMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusMultipartFormData1 = MeetingRegistrantStatusMultipartFormData1;
var MeetingRegistrantStatusRequests = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusRequests, _super);
    function MeetingRegistrantStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MeetingRegistrantStatusApplicationJson)
    ], MeetingRegistrantStatusRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", MeetingRegistrantStatusMultipartFormData1)
    ], MeetingRegistrantStatusRequests.prototype, "object1", void 0);
    return MeetingRegistrantStatusRequests;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusRequests = MeetingRegistrantStatusRequests;
var MeetingRegistrantStatusSecurity = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusSecurity, _super);
    function MeetingRegistrantStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], MeetingRegistrantStatusSecurity.prototype, "oAuth", void 0);
    return MeetingRegistrantStatusSecurity;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusSecurity = MeetingRegistrantStatusSecurity;
var MeetingRegistrantStatusRequest = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusRequest, _super);
    function MeetingRegistrantStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantStatusPathParams)
    ], MeetingRegistrantStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantStatusQueryParams)
    ], MeetingRegistrantStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantStatusRequests)
    ], MeetingRegistrantStatusRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MeetingRegistrantStatusSecurity)
    ], MeetingRegistrantStatusRequest.prototype, "security", void 0);
    return MeetingRegistrantStatusRequest;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusRequest = MeetingRegistrantStatusRequest;
var MeetingRegistrantStatusResponse = /** @class */ (function (_super) {
    __extends(MeetingRegistrantStatusResponse, _super);
    function MeetingRegistrantStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MeetingRegistrantStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MeetingRegistrantStatusResponse.prototype, "statusCode", void 0);
    return MeetingRegistrantStatusResponse;
}(utils_1.SpeakeasyBase));
exports.MeetingRegistrantStatusResponse = MeetingRegistrantStatusResponse;
