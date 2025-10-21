export function escapeTag(tag: string): string {
    return tag.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
