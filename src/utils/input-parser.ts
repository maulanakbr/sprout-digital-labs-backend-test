const parse = (s: string): [number, number] => {
  const col = s.charCodeAt(0) - 'a'.charCodeAt(0);
  const row = 8 - parseInt(s[1]);
  return [row, col];
};

export function parseInput(input: string): [[number, number], [number, number]] | null {
  const match = input.match(/^([a-h][1-8])\s+([a-h][1-8])$/);
  if (!match) return null;

  return [parse(match[1]), parse(match[2])];
}
