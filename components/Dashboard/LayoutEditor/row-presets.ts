class RowPreset
{
	private static readonly iconChar = '█';

	public constructor(
		public readonly label: string,
		public readonly spans: number[]
	)
	{

	}

	public getIcon()
	{
		return this.spans.map(x => RowPreset.iconChar.repeat(x)).join(" ");
	}
}

export const ROW_PRESETS: RowPreset[] = [
	new RowPreset('Full', [12]),
	new RowPreset('Half', [6, 6]),
	new RowPreset('Thirds', [4, 4, 4]),
	new RowPreset('Quarters', [3, 3, 3, 3]),
	new RowPreset('Wide + Narrow', [8, 4]),
	new RowPreset('Narrow + Wide', [4, 8]),
	new RowPreset('Featured', [7, 5]),
	new RowPreset('Sidebar', [5, 7]),
	new RowPreset('Three Uneven', [6, 3, 3]),
	new RowPreset('Three Uneven', [60, 3, 3]),
];