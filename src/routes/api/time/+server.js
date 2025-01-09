import { json } from '@sveltejs/kit';

export function GET() {
    return json({ now: new Date().toISOString() });
}