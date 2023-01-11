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
exports.AssignCallingPlanResponse = exports.AssignCallingPlanRequest = exports.AssignCallingPlanSecurity = exports.AssignCallingPlanRequests = exports.AssignCallingPlanMultipartFormData1 = exports.AssignCallingPlanMultipartFormDataCallingPlans = exports.AssignCallingPlanApplicationJson = exports.AssignCallingPlanApplicationJsonCallingPlans = exports.AssignCallingPlanPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AssignCallingPlanPathParams = /** @class */ (function (_super) {
    __extends(AssignCallingPlanPathParams, _super);
    function AssignCallingPlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AssignCallingPlanPathParams.prototype, "userId", void 0);
    return AssignCallingPlanPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanPathParams = AssignCallingPlanPathParams;
var AssignCallingPlanApplicationJsonCallingPlans = /** @class */ (function (_super) {
    __extends(AssignCallingPlanApplicationJsonCallingPlans, _super);
    function AssignCallingPlanApplicationJsonCallingPlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AssignCallingPlanApplicationJsonCallingPlans.prototype, "type", void 0);
    return AssignCallingPlanApplicationJsonCallingPlans;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanApplicationJsonCallingPlans = AssignCallingPlanApplicationJsonCallingPlans;
var AssignCallingPlanApplicationJson = /** @class */ (function (_super) {
    __extends(AssignCallingPlanApplicationJson, _super);
    function AssignCallingPlanApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calling_plans", elemType: AssignCallingPlanApplicationJsonCallingPlans }),
        __metadata("design:type", Array)
    ], AssignCallingPlanApplicationJson.prototype, "callingPlans", void 0);
    return AssignCallingPlanApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanApplicationJson = AssignCallingPlanApplicationJson;
var AssignCallingPlanMultipartFormDataCallingPlans = /** @class */ (function (_super) {
    __extends(AssignCallingPlanMultipartFormDataCallingPlans, _super);
    function AssignCallingPlanMultipartFormDataCallingPlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AssignCallingPlanMultipartFormDataCallingPlans.prototype, "type", void 0);
    return AssignCallingPlanMultipartFormDataCallingPlans;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanMultipartFormDataCallingPlans = AssignCallingPlanMultipartFormDataCallingPlans;
var AssignCallingPlanMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AssignCallingPlanMultipartFormData1, _super);
    function AssignCallingPlanMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=calling_plans;json=true", elemType: AssignCallingPlanMultipartFormDataCallingPlans }),
        __metadata("design:type", Array)
    ], AssignCallingPlanMultipartFormData1.prototype, "callingPlans", void 0);
    return AssignCallingPlanMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanMultipartFormData1 = AssignCallingPlanMultipartFormData1;
var AssignCallingPlanRequests = /** @class */ (function (_super) {
    __extends(AssignCallingPlanRequests, _super);
    function AssignCallingPlanRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignCallingPlanApplicationJson)
    ], AssignCallingPlanRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignCallingPlanMultipartFormData1)
    ], AssignCallingPlanRequests.prototype, "object1", void 0);
    return AssignCallingPlanRequests;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanRequests = AssignCallingPlanRequests;
var AssignCallingPlanSecurity = /** @class */ (function (_super) {
    __extends(AssignCallingPlanSecurity, _super);
    function AssignCallingPlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], AssignCallingPlanSecurity.prototype, "oAuth", void 0);
    return AssignCallingPlanSecurity;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanSecurity = AssignCallingPlanSecurity;
var AssignCallingPlanRequest = /** @class */ (function (_super) {
    __extends(AssignCallingPlanRequest, _super);
    function AssignCallingPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignCallingPlanPathParams)
    ], AssignCallingPlanRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignCallingPlanRequests)
    ], AssignCallingPlanRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignCallingPlanSecurity)
    ], AssignCallingPlanRequest.prototype, "security", void 0);
    return AssignCallingPlanRequest;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanRequest = AssignCallingPlanRequest;
var AssignCallingPlanResponse = /** @class */ (function (_super) {
    __extends(AssignCallingPlanResponse, _super);
    function AssignCallingPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AssignCallingPlanResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignCallingPlanResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignCallingPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssignCallingPlanResponse.prototype, "assignCallingPlan200ApplicationJSONAny", void 0);
    return AssignCallingPlanResponse;
}(utils_1.SpeakeasyBase));
exports.AssignCallingPlanResponse = AssignCallingPlanResponse;
