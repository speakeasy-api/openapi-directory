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
exports.RuleSet = exports.RuleSetRuleSetTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var reference_1 = require("./reference");
var RuleSetRuleSetTypeEnum;
(function (RuleSetRuleSetTypeEnum) {
    RuleSetRuleSetTypeEnum["NsxStandard"] = "NSX_STANDARD";
    RuleSetRuleSetTypeEnum["NsxRedirect"] = "NSX_REDIRECT";
    RuleSetRuleSetTypeEnum["AwsStandard"] = "AWS_STANDARD";
})(RuleSetRuleSetTypeEnum = exports.RuleSetRuleSetTypeEnum || (exports.RuleSetRuleSetTypeEnum = {}));
var RuleSet = /** @class */ (function (_super) {
    __extends(RuleSet, _super);
    function RuleSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firewall" }),
        __metadata("design:type", reference_1.Reference)
    ], RuleSet.prototype, "firewall", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rule_set_type" }),
        __metadata("design:type", String)
    ], RuleSet.prototype, "ruleSetType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: reference_1.Reference }),
        __metadata("design:type", Array)
    ], RuleSet.prototype, "rules", void 0);
    return RuleSet;
}(utils_1.SpeakeasyBase));
exports.RuleSet = RuleSet;
