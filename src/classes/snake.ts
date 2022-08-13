import config from "../config";

const STEPS = {
    up: -1,
    right: 1,
    down: 1,
    left: -1,
};

const AXIS = {
    up: 'y',
    right: 'x',
    down: 'y',
    left: 'x',
};

class Snake {
    matrix;
    snake;

    get head() {
        return this.snake[0];
    }

    constructor(matrix) {
        const cy = Math.round(matrix.size.y / 2);
        const cx = Math.round(matrix.size.x / 2);

        this.matrix = matrix;

        const dir = config.snake.initialDirection;
        const xMultiplier = ['up', 'down'].includes(dir) ? 0 : 1;
        const yMultiplier = ['up', 'down'].includes(dir) ? 1 : 0;
        const step = STEPS[dir];

        if (config.snake.initialLength > matrix.size[AXIS[config.snake.initialDirection]]) {
            config.snake.initialLength = matrix.size[AXIS[config.snake.initialDirection]]
        }

        this.snake = new Array(config.snake.initialLength).fill(null).map((_, i) => ({
            x: cx - i * xMultiplier * step,
            y: cy - i * yMultiplier * step,
            dir: config.snake.initialDirection,
        }));

        this.snake.forEach((piece) => {
            if (piece.x < 0) {
                piece.x = matrix.size.x + piece.x;
            } else if (piece.x >= matrix.size.x) {
                piece.x = piece.x - matrix.size.x;
            }

            if (piece.y < 0) {
                piece.y = matrix.size.y + piece.y;
            } else if (piece.y >= matrix.size.y) {
                piece.y = piece.y - matrix.size.y;
            }
        })
    }

    draw(ctx) {
        ctx.fillStyle = config.style.foregroundColor;

        this.snake.forEach(({ x,  y }) => {
            ctx.fillRect(
                x * (config.board.cellWidth + config.board.cellGap),
                y * (config.board.cellHeight + config.board.cellGap),
                config.board.cellWidth,
                config.board.cellHeight
            );
        });
    }

    update() {
        this.snake.forEach((piece, i) => {
            const cell = this.matrix.getCell(piece.x, piece.y);

            if (cell.redirect && cell.redirect !== piece.dir) {
                piece.dir = cell.redirect;
            }

            if (i === this.snake.length - 1) {
                delete cell.redirect;
            }

            piece[AXIS[piece.dir]] += STEPS[piece.dir];

            const axisSize = this.matrix.size[AXIS[piece.dir]];
            if (piece[AXIS[piece.dir]] === -1) {
                piece[AXIS[piece.dir]] = axisSize - 1;
            } else if (piece[AXIS[piece.dir]] === axisSize) {
                piece[AXIS[piece.dir]] = 0;
            }
        });
    }

    contains(x, y, excludeHead = false) {
        if (excludeHead) {
            return this.snake.slice(1).some((piece) => piece.x === x && piece.y === y);
        }

        return this.snake.some((piece) => piece.x === x && piece.y === y);
    }
}

export default Snake;