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
exports.WebinarRegistrantStatusResponse = exports.WebinarRegistrantStatusRequest = exports.WebinarRegistrantStatusSecurity = exports.WebinarRegistrantStatusRequests = exports.WebinarRegistrantStatusMultipartFormData1 = exports.WebinarRegistrantStatusMultipartFormDataRegistrants = exports.WebinarRegistrantStatusMultipartFormDataActionEnum = exports.WebinarRegistrantStatusApplicationJson = exports.WebinarRegistrantStatusApplicationJsonRegistrants = exports.WebinarRegistrantStatusApplicationJsonActionEnum = exports.WebinarRegistrantStatusQueryParams = exports.WebinarRegistrantStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarRegistrantStatusPathParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusPathParams, _super);
    function WebinarRegistrantStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarRegistrantStatusPathParams.prototype, "webinarId", void 0);
    return WebinarRegistrantStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusPathParams = WebinarRegistrantStatusPathParams;
var WebinarRegistrantStatusQueryParams = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusQueryParams, _super);
    function WebinarRegistrantStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=occurrence_id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusQueryParams.prototype, "occurrenceId", void 0);
    return WebinarRegistrantStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusQueryParams = WebinarRegistrantStatusQueryParams;
var WebinarRegistrantStatusApplicationJsonActionEnum;
(function (WebinarRegistrantStatusApplicationJsonActionEnum) {
    WebinarRegistrantStatusApplicationJsonActionEnum["Approve"] = "approve";
    WebinarRegistrantStatusApplicationJsonActionEnum["Cancel"] = "cancel";
    WebinarRegistrantStatusApplicationJsonActionEnum["Deny"] = "deny";
})(WebinarRegistrantStatusApplicationJsonActionEnum = exports.WebinarRegistrantStatusApplicationJsonActionEnum || (exports.WebinarRegistrantStatusApplicationJsonActionEnum = {}));
var WebinarRegistrantStatusApplicationJsonRegistrants = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusApplicationJsonRegistrants, _super);
    function WebinarRegistrantStatusApplicationJsonRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusApplicationJsonRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusApplicationJsonRegistrants.prototype, "id", void 0);
    return WebinarRegistrantStatusApplicationJsonRegistrants;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusApplicationJsonRegistrants = WebinarRegistrantStatusApplicationJsonRegistrants;
var WebinarRegistrantStatusApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusApplicationJson, _super);
    function WebinarRegistrantStatusApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusApplicationJson.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrants", elemType: WebinarRegistrantStatusApplicationJsonRegistrants }),
        __metadata("design:type", Array)
    ], WebinarRegistrantStatusApplicationJson.prototype, "registrants", void 0);
    return WebinarRegistrantStatusApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusApplicationJson = WebinarRegistrantStatusApplicationJson;
var WebinarRegistrantStatusMultipartFormDataActionEnum;
(function (WebinarRegistrantStatusMultipartFormDataActionEnum) {
    WebinarRegistrantStatusMultipartFormDataActionEnum["Approve"] = "approve";
    WebinarRegistrantStatusMultipartFormDataActionEnum["Cancel"] = "cancel";
    WebinarRegistrantStatusMultipartFormDataActionEnum["Deny"] = "deny";
})(WebinarRegistrantStatusMultipartFormDataActionEnum = exports.WebinarRegistrantStatusMultipartFormDataActionEnum || (exports.WebinarRegistrantStatusMultipartFormDataActionEnum = {}));
var WebinarRegistrantStatusMultipartFormDataRegistrants = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusMultipartFormDataRegistrants, _super);
    function WebinarRegistrantStatusMultipartFormDataRegistrants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusMultipartFormDataRegistrants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusMultipartFormDataRegistrants.prototype, "id", void 0);
    return WebinarRegistrantStatusMultipartFormDataRegistrants;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusMultipartFormDataRegistrants = WebinarRegistrantStatusMultipartFormDataRegistrants;
var WebinarRegistrantStatusMultipartFormData1 = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusMultipartFormData1, _super);
    function WebinarRegistrantStatusMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=action" }),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusMultipartFormData1.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=registrants;json=true", elemType: WebinarRegistrantStatusMultipartFormDataRegistrants }),
        __metadata("design:type", Array)
    ], WebinarRegistrantStatusMultipartFormData1.prototype, "registrants", void 0);
    return WebinarRegistrantStatusMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusMultipartFormData1 = WebinarRegistrantStatusMultipartFormData1;
var WebinarRegistrantStatusRequests = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusRequests, _super);
    function WebinarRegistrantStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarRegistrantStatusApplicationJson)
    ], WebinarRegistrantStatusRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarRegistrantStatusMultipartFormData1)
    ], WebinarRegistrantStatusRequests.prototype, "object1", void 0);
    return WebinarRegistrantStatusRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusRequests = WebinarRegistrantStatusRequests;
var WebinarRegistrantStatusSecurity = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusSecurity, _super);
    function WebinarRegistrantStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarRegistrantStatusSecurity.prototype, "oAuth", void 0);
    return WebinarRegistrantStatusSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusSecurity = WebinarRegistrantStatusSecurity;
var WebinarRegistrantStatusRequest = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusRequest, _super);
    function WebinarRegistrantStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantStatusPathParams)
    ], WebinarRegistrantStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantStatusQueryParams)
    ], WebinarRegistrantStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantStatusRequests)
    ], WebinarRegistrantStatusRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarRegistrantStatusSecurity)
    ], WebinarRegistrantStatusRequest.prototype, "security", void 0);
    return WebinarRegistrantStatusRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusRequest = WebinarRegistrantStatusRequest;
var WebinarRegistrantStatusResponse = /** @class */ (function (_super) {
    __extends(WebinarRegistrantStatusResponse, _super);
    function WebinarRegistrantStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarRegistrantStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarRegistrantStatusResponse.prototype, "statusCode", void 0);
    return WebinarRegistrantStatusResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarRegistrantStatusResponse = WebinarRegistrantStatusResponse;
