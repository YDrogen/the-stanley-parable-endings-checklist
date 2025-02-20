type Ending = {
  url: string;
  endings?: {
    [key: string]: Ending;
  };
};

export const ENDINGS: {
  [key: string]: Ending;
} = {
  "Left door endings": {
    url: "Left_door_endings",
    endings: {
      "Freedom Ending": { url: "Freedom_Ending" },
      "Countdown Ending": { url: "Countdown_Ending" },
      "Bottom of the Mind Control Room Ending": {
        url: "Bottom_of_the_Mind_Control_Room_Ending",
      },
      "Museum Ending": { url: "Museum_Ending" },
      "Elevator Ending": { url: "Elevator_Ending" },
      "Mariella Ending": { url: "Mariella_Ending" },
      "Escape Pod Ending": { url: "Escape_Pod_Ending" },
      "Heaven Ending": { url: "Heaven_Ending" },
      "Broom Closet Ending": { url: "Broom_Closet_Ending" },
    },
  },
  "Right door endings": {
    url: "Right_door_endings",
    endings: {
      "Confusion Ending": { url: "Confusion_Ending" },
      "Powerful Ending": { url: "Powerful_Ending" },
      "Cold Feet Ending": { url: "Cold_Feet_Ending" },
      "Vent Ending": { url: "Vent_Ending" },
      "Apartment Ending": { url: "Apartment_Ending" },
      "Not Stanley Ending": { url: "Not_Stanley_Ending" },
      Zending: { url: "Zending" },
      "Games Ending": {
        url: "Games_Ending",
        endings: {
          "Getting Stuck in the Test Chamber": {
            url: "Getting_Stuck_in_the_Test_Chamber",
          },
        },
      },
      "Art Ending": { url: "Art_Ending" },
    },
  },
  "Pre-Two Doors Room endings": {
    url: "Pre-Two_Doors_Room_endings",
    endings: {
      "Coward Ending": { url: "Coward_Ending" },
      "Out of Map Ending": { url: "Out_of_Map_Ending" },
      "Serious Ending": { url: "Serious_Ending" },
      "Whiteboard Ending": { url: "Whiteboard_Ending" },
    },
  },
  "Bucket Endings": {
    url: "Bucket_Endings",
    endings: {
      "No Buckets Ending": { url: "No_Buckets_Ending" },
    },
  },
  "Progression Endings": {
    url: "Progression_Endings",
    endings: {
      "Paywall Ending": { url: "Paywall_Ending" },
      "New Content Ending": { url: "New_Content_Ending" },
      "Skip Button Ending": { url: "Skip_Button_Ending" },
      "Sequel Ending": {
        url: "Sequel_Ending",
        endings: {
          "Infinite Hole Ending": { url: "Infinite_Hole_Ending" },
        },
      },
      "Figurines Ending": { url: "Figurines_Ending" },
      Epilogue: { url: "Epilogue" },
    },
  },
};
