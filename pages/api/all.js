import quotes from "../../datasets/quotes";

/**
 * @swagger
 * /api/all:
 *   get:
 *     produces:
 *       - application/json
 *     description: Returns all Ye's quotes
 *     responses:
 *       200:
 *         description: All Ye's quotes
 *       500:
 *         description: OH NO!, An sever error was encountered!
 */

const getQuotes = (req, res) => {
  try {
    res.status(200).json(quotes);
  } catch (err) {
    res.status(500).json({ error: "OH NO!, An sever error was encountered!" });
  }
};

export default getQuotes;
