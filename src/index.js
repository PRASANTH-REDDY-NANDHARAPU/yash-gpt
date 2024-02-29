import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import { sendMsgToOpenAI } from './yashai';
const Container = () => {
  let [input, setInput] = useState("");
  let [question, setQuestion] = useState();
  let [answer, setAnswer] = useState();
  let handleSend =() => {
    setQuestion(input);
    setInput("");
    if (input == "what is your name") {
      setAnswer(
        <span>My name is Yas gpt Im an AI model created by prasanth ,my knowledge is upto only 2024 please ask me how can i help you?</span>
      );
    } else if (input == "how to prepare biryani") {
      setAnswer(
        <span>
          Cooking biryani involves several steps, and there are numerous
          variations of this popular dish across different regions. Here's a
          general guide on how to cook a basic chicken biryani. Adjustments can
          be made based on personal preferences and dietary restrictions. This
          recipe is for a stovetop version: Ingredients: For the Rice: 2 cups
          basmati rice 4 cups water 1-2 bay leaves 4-5 green cardamom pods 4-5
          cloves 1-inch cinnamon stick Salt to taste For the Chicken Marinade: 1
          kg chicken, cut into pieces 1 cup yogurt 1 tablespoon ginger-garlic
          paste 1 teaspoon red chili powder 1/2 teaspoon turmeric powder Salt to
          taste Chopped mint and coriander leaves for flavor For the Biryani: 3
          large onions, thinly sliced 1/2 cup cooking oil or ghee 1 teaspoon
          cumin seeds 2-3 green chilies, sliced 1 tablespoon ginger-garlic paste
          1/2 cup fried onions for garnish Chopped mint and coriander leaves
          for garnish Instructions: 1. Marinate the Chicken: Mix chicken pieces
          with yogurt, ginger-garlic paste, red chili powder, turmeric powder,
          salt, and chopped mint and coriander leaves. Allow it to marinate for
          at least 30 minutes to an hour. 2. Prepare the Rice: Wash the basmati
          rice until the water runs clear. In a large pot, bring water to a
          boil. Add rice, bay leaves, cardamom pods, cloves, cinnamon stick, and
          salt. Cook the rice until it's 70-80% done. It should have a slight
          bite to it. 3. Cook the Chicken: In a large, heavy-bottomed pan, heat
          oil or ghee. Add cumin seeds and let them splutter. Add sliced onions
          and cook until golden brown. Add green chilies and ginger-garlic
          paste, sauté until the raw smell disappears. Add marinated chicken and
          cook until the chicken is browned. 4. Layering the Biryani: In the
          same pan, layer half of the partially cooked rice over the chicken.
          Sprinkle fried onions, mint, and coriander leaves on top. Add the
          remaining rice to form another layer. Garnish with fried onions, mint,
          and coriander leaves. Drizzle saffron-infused milk or food color mixed
          with milk on top for color. 5. Dum Cooking Slow Cooking: Seal the
          pot with a tight-fitting lid or aluminum foil. Cook on low heat for
          20-25 minutes, allowing the biryani to cook in its steam dum. Once
          done, gently fluff the rice with a fork, mixing the layers. Serve the
          biryani hot with raita yogurt side dish and enjoy your delicious
          homemade biryani! Adjust spices and ingredients to suit your taste
          preferences.
        </span>
      );
    } else if (input == "how to sleep well") {
      setAnswer(
        <span>
          Getting a good night's sleep is crucial for overall well-being. Here
          are some tips to help you sleep well: Establish a Sleep Routine: Go to
          bed and wake up at the same time every day, even on weekends. This
          helps regulate your body's internal clock. Create a Comfortable Sleep
          Environment: Make your bedroom conducive to sleep by keeping it dark,
          quiet, and cool. Invest in a comfortable mattress and pillows. Limit
          Exposure to Screens Before Bed: Avoid screens phones, tablets,
          computers, and TVs at least an hour before bedtime. The blue light
          emitted can interfere with your sleep cycle. Watch Your Diet: Avoid
          heavy meals, caffeine, and nicotine close to bedtime. Consider a light
          snack if you're hungry before bedtime. Exercise Regularly: Regular
          physical activity can promote better sleep. However, avoid intense
          workouts close to bedtime. Manage Stress: Practice relaxation
          techniques, such as deep breathing, meditation, or yoga, to help
          manage stress and unwind before bed. Limit Naps: If you need to nap
          during the day, keep it short 20-30 minutes and avoid napping late
          in the afternoon. Establish a Bedtime Ritual: Engage in calming
          activities before bed, such as reading a book, taking a warm bath, or
          listening to soothing music. Limit Liquid Intake Before Bed: Reduce
          the likelihood of waking up during the night due to bathroom trips by
          limiting liquids before bedtime. Seek Natural Light Exposure: Exposure
          to natural light during the day helps regulate your body's internal
          clock. Spend time outdoors, especially in the morning. Manage Your
          Bedroom Clock: If looking at the clock causes stress, turn it away or
          place it in a position where you can't see the time. Consider Sleep
          Aids Wisely: Consult with a healthcare professional before using sleep
          aids. They may recommend them in certain situations, but they should
          be used cautiously and under supervision. If you consistently struggle
          with sleep despite trying these tips, it's advisable to consult with a
          healthcare professional to rule out any underlying sleep disorders or
          health issues.
        </span>
      );
    } else if (input == "i love you") {
      setAnswer(
        <span>
          I appreciate your kind words, but it's important to remember that I'm
          just a machine learning model created by prasanth and don't have
          emotions. If you have any questions or if there's anything specific
          you'd like assistance with, feel free to let me know!
        </span>
      );
    } else if (input == "thank you yas") {
      setAnswer(
        <span>
          You're welcome! If you have any more questions or if there's anything
          else I can help you with, feel free to ask. Sweet dreams and take
          care!
        </span>
      );
    } else if (input == "tell me any joke") {
      setAnswer(
        <span>
          Sure, here's a joke for you: Why don't scientists trust atoms? Because
          they make up everything!
        </span>
      );
    } else if (input == "tell me any joke related to programer") {
      setAnswer(
        <span>
          Certainly! Here's a programming-related joke for you: Why do
          programmers prefer dark mode? Because light attracts bugs!
        </span>
      );
    } else {
      setAnswer(
        <span>
          It looks like you entered a random sequence of letters. If you have
          any specific questions or if there's something you'd like to discuss,
          feel free to let me know!
        </span>
      );
    }
  };
  return (
    <div className="container">
      <div className="sidebar">
        <div className="upper">
          <img
            className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPs1yDT4sWLSM47LgieIuWATr6_OEkhYm3g&usqp=CAU"
          ></img>
          <h1 className="name">YAS GPT</h1>
        </div>
        <button className="chat-btn">
          {" "}
          <span className="plus">+</span>NEW CHAT
        </button>
        <button className="query-btn">
          {" "}
          <span className="plus">？</span>what is programing
        </button>
        <button className="query-btn">
          {" "}
          <span className="plus">？</span>how to cook biryani
        </button>
        <button className="query-btn">
          {" "}
          <span className="plus">？</span>what is the meaning of love
        </button>
        <div className="lower"></div>
      </div>
      <div className="main">
        <div className="t-chat">
          <div className="query">
            <img
              className="chat-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPs1yDT4sWLSM47LgieIuWATr6_OEkhYm3g&usqp=CAU"
            ></img>
            <p className="para">
              Hey im Yas Gpt an AI model version 3.2.6!! <br /> Created by
              Prasanth🚀 <br />I don't have the ability to predict specific
              events in the past , my knowledge is upto only 2024{" "}
            </p>
          </div>
          <div className="query">
            <img
              className="chat-img"
              src="https://www.stnup.com/images/ceo.jpeg"
            ></img>
            <p className="para">{question}</p>
          </div>
          <div className="query">
            <img
              className="chat-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPs1yDT4sWLSM47LgieIuWATr6_OEkhYm3g&usqp=CAU"
            ></img>
            <p className="para">{answer}</p>
          </div>
          <div className="input-sent">
            {/* <input className='type' placeholder='Send a message ?'></input> */}
            <input
              className="type"
              placeholder="Send a message ?"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            <button onClick={handleSend} className="sent">
              🚀
            </button>
            {/* <button className='sent'>🚀</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
