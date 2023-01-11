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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayItemInput = exports.PayItem = void 0;
var utils_1 = require("../../../internal/utils");
var deductiontype_1 = require("./deductiontype");
var earningsrate_1 = require("./earningsrate");
var leavetype_1 = require("./leavetype");
var reimbursementtype_1 = require("./reimbursementtype");
var deductiontype_2 = require("./deductiontype");
var earningsrate_2 = require("./earningsrate");
var leavetype_2 = require("./leavetype");
var reimbursementtype_2 = require("./reimbursementtype");
var PayItem = /** @class */ (function (_super) {
    __extends(PayItem, _super);
    function PayItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeductionTypes", elemType: deductiontype_1.DeductionType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "deductionTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EarningsRates", elemType: earningsrate_1.EarningsRate }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "earningsRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LeaveTypes", elemType: leavetype_1.LeaveType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "leaveTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReimbursementTypes", elemType: reimbursementtype_1.ReimbursementType }),
        __metadata("design:type", Array)
    ], PayItem.prototype, "reimbursementTypes", void 0);
    return PayItem;
}(utils_1.SpeakeasyBase));
exports.PayItem = PayItem;
var PayItemInput = /** @class */ (function (_super) {
    __extends(PayItemInput, _super);
    function PayItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeductionTypes", elemType: deductiontype_2.DeductionTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "deductionTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EarningsRates", elemType: earningsrate_2.EarningsRateInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "earningsRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LeaveTypes", elemType: leavetype_2.LeaveTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "leaveTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReimbursementTypes", elemType: reimbursementtype_2.ReimbursementTypeInput }),
        __metadata("design:type", Array)
    ], PayItemInput.prototype, "reimbursementTypes", void 0);
    return PayItemInput;
}(utils_1.SpeakeasyBase));
exports.PayItemInput = PayItemInput;
