const config = {
	board: {
		cellSize: 20,
		cellGap: 1,
	},
	snake: {
		initialLength: 20,
		initialDirection: 'right',
	},
	style: {
		backgroundColor: '#9bbf00',
		cellColor: '#8baf00',
		foregroundColor: '#3e5711',
	},
};

config.board.cellWidth = config.board.cellSize;
config.board.cellHeight = config.board.cellSize;

export default config;