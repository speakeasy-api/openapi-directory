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
exports.DashboardClientFeedbackResponse = exports.DashboardClientFeedbackRequest = exports.DashboardClientFeedback200ApplicationJson = exports.DashboardClientFeedback200ApplicationJsonClientFeedbacks = exports.DashboardClientFeedbackSecurity = exports.DashboardClientFeedbackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DashboardClientFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackQueryParams, _super);
    function DashboardClientFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedbackQueryParams.prototype, "to", void 0);
    return DashboardClientFeedbackQueryParams;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackQueryParams = DashboardClientFeedbackQueryParams;
var DashboardClientFeedbackSecurity = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackSecurity, _super);
    function DashboardClientFeedbackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], DashboardClientFeedbackSecurity.prototype, "oAuth", void 0);
    return DashboardClientFeedbackSecurity;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackSecurity = DashboardClientFeedbackSecurity;
var DashboardClientFeedback200ApplicationJsonClientFeedbacks = /** @class */ (function (_super) {
    __extends(DashboardClientFeedback200ApplicationJsonClientFeedbacks, _super);
    function DashboardClientFeedback200ApplicationJsonClientFeedbacks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback_id" }),
        __metadata("design:type", String)
    ], DashboardClientFeedback200ApplicationJsonClientFeedbacks.prototype, "feedbackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedback_name" }),
        __metadata("design:type", String)
    ], DashboardClientFeedback200ApplicationJsonClientFeedbacks.prototype, "feedbackName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants_count" }),
        __metadata("design:type", Number)
    ], DashboardClientFeedback200ApplicationJsonClientFeedbacks.prototype, "participantsCount", void 0);
    return DashboardClientFeedback200ApplicationJsonClientFeedbacks;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedback200ApplicationJsonClientFeedbacks = DashboardClientFeedback200ApplicationJsonClientFeedbacks;
var DashboardClientFeedback200ApplicationJson = /** @class */ (function (_super) {
    __extends(DashboardClientFeedback200ApplicationJson, _super);
    function DashboardClientFeedback200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_feedbacks", elemType: DashboardClientFeedback200ApplicationJsonClientFeedbacks }),
        __metadata("design:type", Array)
    ], DashboardClientFeedback200ApplicationJson.prototype, "clientFeedbacks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedback200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], DashboardClientFeedback200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], DashboardClientFeedback200ApplicationJson.prototype, "totalRecords", void 0);
    return DashboardClientFeedback200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedback200ApplicationJson = DashboardClientFeedback200ApplicationJson;
var DashboardClientFeedbackRequest = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackRequest, _super);
    function DashboardClientFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackQueryParams)
    ], DashboardClientFeedbackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedbackSecurity)
    ], DashboardClientFeedbackRequest.prototype, "security", void 0);
    return DashboardClientFeedbackRequest;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackRequest = DashboardClientFeedbackRequest;
var DashboardClientFeedbackResponse = /** @class */ (function (_super) {
    __extends(DashboardClientFeedbackResponse, _super);
    function DashboardClientFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DashboardClientFeedbackResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DashboardClientFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DashboardClientFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DashboardClientFeedback200ApplicationJson)
    ], DashboardClientFeedbackResponse.prototype, "dashboardClientFeedback200ApplicationJSONObject", void 0);
    return DashboardClientFeedbackResponse;
}(utils_1.SpeakeasyBase));
exports.DashboardClientFeedbackResponse = DashboardClientFeedbackResponse;
