import { Grid, makeStyles } from "@material-ui/core";
import ProgressBar from "../ui/ProgressBar";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  badgeTitle_heading: {
    fontSize: "16px",
    padding: "0 0 0 0.2rem",
  },
  badge_heading: {
    fontSize: "12px",
    color: "#4e4e4e",
    borderRadius: "6px",
    display: "inline-Block",
    whiteSpace: "nowrap",
  },
  badge_div_heading: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
  },
  card_div: {
    color: "#1c1d1f",
    whiteSpace: "nowrap",
    flex: 1,
    minWidth: "1px",
  },
  sub_heading: {
    color: "#6a6f73",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  card_padding: {
    padding: "1rem",
    margin: "0.4rem",
  },
  badge: {
    fontSize: " 12px",
    border: "1px solid #dfdfdf",
    color: "#4e4e4e",
    borderRadius: "6px",
    display: "inline-Block",
    padding: "0 1rem 0 1rem",
    whiteSpace: "nowrap",
  },
  badge_div: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
  },
  icon_badge: {
    position: "absolute",
    backgroundColor: "#f2dee3",
    top: "1.3rem",
    background: "2px 3px 4px 1px",
    right: "0.9rem",
    width: "40px",
    height: "40px",
    display: "block",
    borderRadius: "30px",
    boxShadow: "2px 2px 10px 2px #dfdfdf",
    textAlign: "right",
  },
  badge_position: {
    position: "relative",
  },
  padding_custom: {
    padding: "0.5",
    margin: "0.5rem",
  },
  dot: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    display: "inline-block",
  },
  spaceBetweenTwoDiv: {
    marginBottom: "0.8rem",
  },
  pinkColor: {
    color: "#f36",
  },
  badgeTitle: {
    fontSize: "16px",
    padding: "0 0 0 0.2rem",
  },
}));

const Card = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      {data.length > 0 ? (
        data.map((card, index) => {
          return (
            <Grid
              item
              key={index}
              md={4}
              className={clsx(classes.card_padding, classes.badge_position)}
              id="volopay_box_shadow"
            >
              <div
                className={clsx(classes.card_div, classes.spaceBetweenTwoDiv)}
              >
                <h4 className="margin_0">{card.name}</h4>
                <div>
                  <span className={classes.icon_badge}>
                    {card.card_type === "Burner" && (
                      <i
                        className={`material-icons ${clsx(
                          classes.padding_custom,
                          classes.pinkColor
                        )}`}
                      >
                        local_fire_department_icon
                      </i>
                    )}
                    {card.card_type === "Subscription" && (
                      <i
                        className={`material-icons ${clsx(
                          classes.padding_custom,
                          classes.pinkColor
                        )}`}
                      >
                        cached_icon
                      </i>
                    )}
                    {card.card_type === "Blocked" && (
                      <i
                        className={`material-icons ${clsx(
                          classes.padding_custom,
                          classes.pinkColor
                        )}`}
                      >
                        do_disturb_alt_icon
                      </i>
                    )}
                  </span>
                </div>
                <div
                  className={clsx(
                    classes.sub_heading,
                    classes.spaceBetweenTwoDiv
                  )}
                >
                  {card.cardholder}.{card.budget_name}
                </div>
                <div
                  className={clsx(
                    classes.badge_div,
                    classes.spaceBetweenTwoDiv
                  )}
                >
                  <div
                    className={clsx(classes.badge, classes.spaceBetweenTwoDiv)}
                  >
                    {card.card_type}
                  </div>
                  <div>
                    {card.card_type === "Burner"
                      ? "Expires : "
                      : "August Limit : "}
                    {card.expiry}
                  </div>
                  {/* <div>{card.expiry}</div> */}
                </div>
                <div className={classes.spaceBetweenTwoDiv}>
                  <ProgressBar />
                </div>
                <div className={classes.badge_div_heading}>
                  <div className={classes.badge_heading}>
                    <span
                      className={classes.dot}
                      id="volopay_Background-Color"
                    ></span>
                    <span className={classes.badgeTitle}>Spent</span>
                  </div>
                  <div className="fontSize14">
                    {card.spent.value} {card.spent.currency}
                  </div>
                </div>
                <div className={classes.badge_div_heading}>
                  <div className={classes.badge_heading}>
                    <span
                      className={classes.dot}
                      id="green_Background-Color"
                    ></span>
                    <span className={classes.badgeTitle_heading}>
                      Available to Spend
                    </span>
                  </div>
                  <div
                    className={`${classes.badgeTitle} fontSize14 fontweight700`}
                  >
                    {card.available_to_spend.value}{" "}
                    {card.available_to_spend.currency}{" "}
                  </div>
                </div>
              </div>
            </Grid>
          );
        })
      ) : (
        <div>No Data!</div>
      )}
    </Grid>
  );
};
export default Card;
