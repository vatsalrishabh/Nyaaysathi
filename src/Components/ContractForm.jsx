import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContractForm = () => {
  const [clientData, setClientData] = useState({
    name: '',
    address: '',
    email: '',
    mobile: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAccepted(true);
  };

  const handlePaymentRedirect = () => {
    if (isAgreed) {
      navigate('/payment'); // Adjust to your payment route
    }
  };

  const handleReject = () => {
    navigate('/thank-you'); // Redirect to Thank You page
  };

  return (
    <div className="p-4">
      {!isAccepted ? (
        <form onSubmit={handleSubmit} className="mb-4">
          <h2 className="text-lg font-bold mb-2">Client Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={clientData.name}
            onChange={handleChange}
            required
            className="block w-full mb-2 border border-gray-300 p-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={clientData.address}
            onChange={handleChange}
            required
            className="block w-full mb-2 border border-gray-300 p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={clientData.email}
            onChange={handleChange}
            required
            className="block w-full mb-2 border border-gray-300 p-2"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={clientData.mobile}
            onChange={handleChange}
            required
            className="block w-full mb-2 border border-gray-300 p-2"
          />
          <input
            type="date"
            name="date"
            value={clientData.date}
            onChange={handleChange}
            className="block w-full mb-4 border border-gray-300 p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      ) : (
        <div className="contract">
          <h2 className="text-xl font-bold mb-2">Legal Service E-Agreement / इलेक्ट्रॉनिक अनुबंध </h2>
          <p className='pb-3'>अंतर्गत धारा 10 ऑफ़ सूचना प्रोद्योगिकी अधिनियम 2000</p>
          <p>यह कानूनी सेवा अनुबंध ("समझौता") इस {clientData.date} को निम्न के बीच किया जाता है:</p>
          <p>न्याय साथी कानूनी जानकारी सेवाएँ (इसके बाद इसे "सेवा प्रदाता" कहा गया है)</p>
          <p>535ए छिवकी, नैनी, प्रयागराज, उत्तर प्रदेश।</p>
          <p>और</p>
          <p>{clientData.name} (इसके बाद इसे "क्लाइंट" कहा गया है)</p>
          <p>पता: {clientData.address}</p>
          <p>ईमेल: {clientData.email}</p>
          <p>मोबाइल नंबर: {clientData.mobile}</p>
          <h3 className="font-semibold mt-4">1. प्रदान की गई सेवाएँ</h3>
          <p>सेवा प्रदाता ग्राहक को निम्नलिखित कानूनी सेवाएँ प्रदान करने के लिए सहमत है:</p>
          <p>बीएनएसएस की धारा 173 के तहत एफआईआर से संबंधित कानूनी सलाह।</p>
          <p>ग्राहक द्वारा प्रदान की गई जानकारी के आधार पर एफआईआर के लिए आवेदन का प्रारूप तैयार करना।</p>
          <h3 className="font-semibold mt-4">2. शुल्क</h3>
          <p>ग्राहक सेवा शुरू होने से पहले ₹50 (भारतीय पचास रुपये) का शुल्क देने के लिए सहमत है और ड्राफ्टिंग प्रक्रिया ख़तम होने के बाद लीगल ड्राफ्ट whatsapp के माध्यम से भेजे जाने के 24 घंटे के अन्दर ₹350 (भारतीय तीन सौ पचास रुपये) भुगतान किया जाना चाहिए।</p>
          <h3 className="font-semibold mt-4">3. समयरेखा का मसौदा तैयार करना</h3>
          <p>सेवा प्रदाता ग्राहक से सभी आवश्यक जानकारी प्राप्त करने के 24 घंटे के भीतर आवेदन का प्रारूप तैयार करने के लिए सहमत है।</p>
          <h3 className="font-semibold mt-4">4. कानूनी सलाह समय सीमा</h3>
          <p>सेवा प्रदाता इस अनुबंध के हिस्से के रूप में 1 से 1.5 घंटे की अवधि के लिए कानूनी सलाह प्रदान करेगा।</p>
          <h3 className="font-semibold mt-4">5. ग्राहक के दायित्व</h3>
          <p>ग्राहक आवेदन के प्रारूपण के लिए आवश्यक सभी आवश्यक जानकारी और दस्तावेज प्रदान करने और सेवा प्रदाता के साथ पूर्ण सहयोग करने के लिए सहमत है।</p>
          <h3 className="font-semibold mt-4">6. समझौते की स्वीकृति</h3>
          <p>ग्राहक को व्हाट्सएप के माध्यम से सेवा प्रदाता को एक पुष्टिकरण संदेश भेजना होगा जिसमें लिखा होगा "मैं अनुबंध स्वीकार करता हूं" या बस "मैं स्वीकार करता हूं।" यह संदेश यहां उल्लिखित शर्तों की स्वीकृति माना जाएगा।</p>
          <h3 className="font-semibold mt-4">7. समाप्ति</h3>
          <p>इस अनुबंध को किसी भी पक्ष द्वारा लिखित नोटिस के साथ समाप्त किया जा सकता है।</p>
          <h3 className="font-semibold mt-4">8. शासी कानून</h3>
          <p>यह समझौता भारत के कानूनों के अनुसार शासित और समझा जाएगा।</p>
          <p>इसके साक्ष्य में, पार्टियों ने उपरोक्त लिखित तिथि के अनुसार इस कानूनी सेवा समझौते को निष्पादित किया है।</p>
          <p>सेवा प्रदाता:</p>
          <p>वत्सल ऋषभ पांडे</p>
          <p>संस्थापक</p>
          <p>न्याय साथी कानूनी जानकारी सेवाएँ</p>
<br /><br /><br /><br />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="agreeTerms">मैं इस समझौते से सहमत हूँ।</label>
          </div>

          <button
            onClick={handlePaymentRedirect}
            disabled={!isAgreed}
            className={`bg-blue-500 text-white p-2 rounded mt-4 ${!isAgreed && 'opacity-50 cursor-not-allowed'}`}
          >
            मै इस अग्रीमेंट से सहमत हूँ
          </button>

          <button
            onClick={handleReject}
            className="bg-red-500 text-white p-2 rounded mt-2 ml-2"
          >
            मुझे मंजूर नहीं
          </button>
        </div>
      )}
    </div>
  );
};

export default ContractForm;
