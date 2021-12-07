import quotes from "../../datasets/quotes";

/**
 * @swagger
 * /api/{id}:
 *   get:
 *     description: Returns a Ye's quote by ID
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A ye quote
 *       404:
 *         description: Your ID doens't exists!
 *       500:
 *         description: OH NO!, An sever error was encountered!
 */

const getQuoteById = (req, res) => {
  const { id } = req.query;
  if (isNaN(id) || id.includes(".") || id > quotes.length) {
    res.status("404").json({ quote: "Your ID doens't exists!" });
  } else {
    try {
      const quote = quotes[id - 1];
      res.status(200).json({ quote: quote });
    } catch (err) {
      res
        .status(500)
        .json({ error: "OH NO!, An sever error was encountered!" });
    }
  }
};

export default getQuoteById;
