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
exports.WebinarPanelistCreateResponse = exports.WebinarPanelistCreateRequest = exports.WebinarPanelistCreate201ApplicationJson = exports.WebinarPanelistCreateSecurity = exports.WebinarPanelistCreateRequests = exports.WebinarPanelistCreateMultipartFormData1 = exports.WebinarPanelistCreateMultipartFormDataPanelists = exports.WebinarPanelistCreateApplicationJson = exports.WebinarPanelistCreateApplicationJsonPanelists = exports.WebinarPanelistCreatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var WebinarPanelistCreatePathParams = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreatePathParams, _super);
    function WebinarPanelistCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", Number)
    ], WebinarPanelistCreatePathParams.prototype, "webinarId", void 0);
    return WebinarPanelistCreatePathParams;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreatePathParams = WebinarPanelistCreatePathParams;
// WebinarPanelistCreateApplicationJsonPanelists
/**
 * Panelist base object.
**/
var WebinarPanelistCreateApplicationJsonPanelists = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateApplicationJsonPanelists, _super);
    function WebinarPanelistCreateApplicationJsonPanelists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarPanelistCreateApplicationJsonPanelists.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPanelistCreateApplicationJsonPanelists.prototype, "name", void 0);
    return WebinarPanelistCreateApplicationJsonPanelists;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateApplicationJsonPanelists = WebinarPanelistCreateApplicationJsonPanelists;
// WebinarPanelistCreateApplicationJson
/**
 * Webinar panelist.
**/
var WebinarPanelistCreateApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateApplicationJson, _super);
    function WebinarPanelistCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panelists", elemType: WebinarPanelistCreateApplicationJsonPanelists }),
        __metadata("design:type", Array)
    ], WebinarPanelistCreateApplicationJson.prototype, "panelists", void 0);
    return WebinarPanelistCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateApplicationJson = WebinarPanelistCreateApplicationJson;
// WebinarPanelistCreateMultipartFormDataPanelists
/**
 * Panelist base object.
**/
var WebinarPanelistCreateMultipartFormDataPanelists = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateMultipartFormDataPanelists, _super);
    function WebinarPanelistCreateMultipartFormDataPanelists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], WebinarPanelistCreateMultipartFormDataPanelists.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WebinarPanelistCreateMultipartFormDataPanelists.prototype, "name", void 0);
    return WebinarPanelistCreateMultipartFormDataPanelists;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateMultipartFormDataPanelists = WebinarPanelistCreateMultipartFormDataPanelists;
// WebinarPanelistCreateMultipartFormData1
/**
 * Webinar panelist.
**/
var WebinarPanelistCreateMultipartFormData1 = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateMultipartFormData1, _super);
    function WebinarPanelistCreateMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=panelists;json=true", elemType: WebinarPanelistCreateMultipartFormDataPanelists }),
        __metadata("design:type", Array)
    ], WebinarPanelistCreateMultipartFormData1.prototype, "panelists", void 0);
    return WebinarPanelistCreateMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateMultipartFormData1 = WebinarPanelistCreateMultipartFormData1;
var WebinarPanelistCreateRequests = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateRequests, _super);
    function WebinarPanelistCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebinarPanelistCreateApplicationJson)
    ], WebinarPanelistCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", WebinarPanelistCreateMultipartFormData1)
    ], WebinarPanelistCreateRequests.prototype, "object1", void 0);
    return WebinarPanelistCreateRequests;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateRequests = WebinarPanelistCreateRequests;
var WebinarPanelistCreateSecurity = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateSecurity, _super);
    function WebinarPanelistCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], WebinarPanelistCreateSecurity.prototype, "oAuth", void 0);
    return WebinarPanelistCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateSecurity = WebinarPanelistCreateSecurity;
var WebinarPanelistCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreate201ApplicationJson, _super);
    function WebinarPanelistCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], WebinarPanelistCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], WebinarPanelistCreate201ApplicationJson.prototype, "updatedAt", void 0);
    return WebinarPanelistCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreate201ApplicationJson = WebinarPanelistCreate201ApplicationJson;
var WebinarPanelistCreateRequest = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateRequest, _super);
    function WebinarPanelistCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistCreatePathParams)
    ], WebinarPanelistCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistCreateRequests)
    ], WebinarPanelistCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistCreateSecurity)
    ], WebinarPanelistCreateRequest.prototype, "security", void 0);
    return WebinarPanelistCreateRequest;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateRequest = WebinarPanelistCreateRequest;
var WebinarPanelistCreateResponse = /** @class */ (function (_super) {
    __extends(WebinarPanelistCreateResponse, _super);
    function WebinarPanelistCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], WebinarPanelistCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], WebinarPanelistCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], WebinarPanelistCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", WebinarPanelistCreate201ApplicationJson)
    ], WebinarPanelistCreateResponse.prototype, "webinarPanelistCreate201ApplicationJSONObject", void 0);
    return WebinarPanelistCreateResponse;
}(utils_1.SpeakeasyBase));
exports.WebinarPanelistCreateResponse = WebinarPanelistCreateResponse;
