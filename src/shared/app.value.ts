export enum MainRole {
  Groom = "groom",
  Bride = "bride",
}

export const mainRoles = [MainRole.Groom, MainRole.Bride];

export const mapRoleToKRLabel = new Map<MainRole, string>([
  [MainRole.Groom, "신랑"],
  [MainRole.Bride, "신부"],
]);
