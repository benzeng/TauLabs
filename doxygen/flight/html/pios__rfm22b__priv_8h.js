var pios__rfm22b__priv_8h =
[
    [ "t_rfm22_RxDataCallback", "pios__rfm22b__priv_8h.html#ga6d517bc1c96f4b523eb7a289850c3bb8", null ],
    [ "t_rfm22_TxDataByteCallback", "pios__rfm22b__priv_8h.html#ga10adbdf30d2b2a9c6eab132094364df2", null ],
    [ "pios_rfm22b_dev_magic", "pios__rfm22b__priv_8h.html#ga25f646fb6abded1e9f076ca00e13cbec", [
      [ "PIOS_RFM22B_DEV_MAGIC", "pios__rfm22b__priv_8h.html#gga25f646fb6abded1e9f076ca00e13cbeca465296d21d23694d7d9f2f7486929f77", null ]
    ] ],
    [ "pios_rfm22b_event", "pios__rfm22b__priv_8h.html#gafefba9f85ea9fb8d2c610fe3759a00c2", [
      [ "RFM22B_EVENT_INT_RECEIVED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a3e4ec4cdace68a2fc496863553f1b21e", null ],
      [ "RFM22B_EVENT_INITIALIZE", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2ac81159af4ef62745e2379cf638c4023e", null ],
      [ "RFM22B_EVENT_INITIALIZED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2ab2a453aeb15fd52d7ee950515ccc396c", null ],
      [ "RFM22B_EVENT_REQUEST_CONNECTION", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2ac19a6abb58f931e6475c592848d7d05a", null ],
      [ "RFM22B_EVENT_WAIT_FOR_CONNECTION", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a92444fc670fb008ab3e6df5fc7551209", null ],
      [ "RFM22B_EVENT_CONNECTION_REQUESTED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2aa6b3b8a36ef2f5be8301355ebce89112", null ],
      [ "RFM22B_EVENT_CONNECTION_ACCEPTED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a270353a6c8c619acd575015ed7acceb6", null ],
      [ "RFM22B_EVENT_PACKET_ACKED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a19e9383feac0c23ce398f7d9384c3059", null ],
      [ "RFM22B_EVENT_PACKET_NACKED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a725d3965af8e429a95709db317751eea", null ],
      [ "RFM22B_EVENT_ACK_TIMEOUT", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a94e81215f6aa0f647dfa646a8ffbb0b5", null ],
      [ "RFM22B_EVENT_RX_MODE", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a6fff9bee58987bb93a1771f29c3c1f23", null ],
      [ "RFM22B_EVENT_PREAMBLE_DETECTED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2ad7dfe2b62a899f8ac694d6ff415f8f4a", null ],
      [ "RFM22B_EVENT_SYNC_DETECTED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a997bf1f3409379b556abfeda294ff184", null ],
      [ "RFM22B_EVENT_RX_COMPLETE", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2adc4252d32316b4bdff1c9b64e46e7f5a", null ],
      [ "RFM22B_EVENT_RX_ERROR", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a35d784cf5079afeadda2640ee6b46f26", null ],
      [ "RFM22B_EVENT_STATUS_RECEIVED", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2aaf8fcd36a96e9bc6fea158bc9f9b9ecd", null ],
      [ "RFM22B_EVENT_TX_START", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a705b1f62a633333da46845128deb24ee", null ],
      [ "RFM22B_EVENT_FAILURE", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2a2465e4731727edd260b49e52dc85de56", null ],
      [ "RFM22B_EVENT_TIMEOUT", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2adc66d582f00b8536c5a13a7ba02acda2", null ],
      [ "RFM22B_EVENT_ERROR", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2af4356b8b7a94d19dc7023bdc33e87b62", null ],
      [ "RFM22B_EVENT_FATAL_ERROR", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2aed906179c93278bdedaa584719416009", null ],
      [ "RFM22B_EVENT_NUM_EVENTS", "pios__rfm22b__priv_8h.html#ggafefba9f85ea9fb8d2c610fe3759a00c2aa1f8214c33b90c900f422b7e5c2b8f31", null ]
    ] ],
    [ "pios_rfm22b_rx_packet_status", "pios__rfm22b__priv_8h.html#ga35600b81785134630f9193e4ff1478a3", [
      [ "RFM22B_GOOD_RX_PACKET", "pios__rfm22b__priv_8h.html#gga35600b81785134630f9193e4ff1478a3a70ea6e91308b4c2944276f919e07af30", null ],
      [ "RFM22B_CORRECTED_RX_PACKET", "pios__rfm22b__priv_8h.html#gga35600b81785134630f9193e4ff1478a3ab785f920fd4d6b5091a150bbbea5dc3f", null ],
      [ "RFM22B_ERROR_RX_PACKET", "pios__rfm22b__priv_8h.html#gga35600b81785134630f9193e4ff1478a3a275f3866391d28d8a46a71a50d4fae12", null ],
      [ "RFM22B_RESENT_TX_PACKET", "pios__rfm22b__priv_8h.html#gga35600b81785134630f9193e4ff1478a3a69529f54139da530e2a9df40d6be5cf1", null ]
    ] ],
    [ "pios_rfm22b_state", "pios__rfm22b__priv_8h.html#gaf31f5344b7afb099b3105bfff4debdca", [
      [ "RFM22B_STATE_UNINITIALIZED", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa435d2d141dac949cbbb311066ff1d84e", null ],
      [ "RFM22B_STATE_INITIALIZING", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa7b299487dbe220f59e1684dd72672fd3", null ],
      [ "RFM22B_STATE_INITIALIZED", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa27bfead702378b4480b2a6125a619e6b", null ],
      [ "RFM22B_STATE_INITIATING_CONNECTION", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa8bd0f5000b8fa7d043c3a9bcccd7ceb3", null ],
      [ "RFM22B_STATE_WAIT_FOR_CONNECTION", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa7c244cdd9274f1107f0caaee4f2554b4", null ],
      [ "RFM22B_STATE_REQUESTING_CONNECTION", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaaceb982d73e068ba7631800977735b857", null ],
      [ "RFM22B_STATE_ACCEPTING_CONNECTION", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaaa8e557f9dff9cf70d39cc40ee0e9c3e6", null ],
      [ "RFM22B_STATE_CONNECTION_ACCEPTED", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaae6ac3eb1e9d3fbe864d227e8dae9ba49", null ],
      [ "RFM22B_STATE_RX_MODE", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa63a36dff1cddc703145598fab4e6bfec", null ],
      [ "RFM22B_STATE_WAIT_PREAMBLE", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaaff1829e6659fb28cb9cc7e69d120924c", null ],
      [ "RFM22B_STATE_WAIT_SYNC", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa65a831997eef86bd160b26db0453cc5d", null ],
      [ "RFM22B_STATE_RX_DATA", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa309b3a0d3adf41d01687864e7b041740", null ],
      [ "RFM22B_STATE_RX_FAILURE", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa8f421837505275bcb2fa262075e7793d", null ],
      [ "RFM22B_STATE_RECEIVING_STATUS", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa2e446fb00d4991e2515e7b0ea2a41177", null ],
      [ "RFM22B_STATE_TX_START", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaacc32ba57d31d0786b6addb57d363e412", null ],
      [ "RFM22B_STATE_TX_DATA", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa961a924caf5750cb8830f00aeb40b665", null ],
      [ "RFM22B_STATE_TX_FAILURE", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaaf1847b13cef0dfe40f78a5d093135b1b", null ],
      [ "RFM22B_STATE_SENDING_ACK", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa4d5c74c46877772372fce099c4d10ad7", null ],
      [ "RFM22B_STATE_SENDING_NACK", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaafb273fcaba2f21d05b48a72bf8ec0218", null ],
      [ "RFM22B_STATE_RECEIVING_ACK", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa31d4bd901d91fa70cd6b5265abb7342f", null ],
      [ "RFM22B_STATE_RECEIVING_NACK", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa0bb4551035b87363e95887adc4c87f44", null ],
      [ "RFM22B_STATE_TIMEOUT", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa94356a3bc173a01ef473c81f7f9f387c", null ],
      [ "RFM22B_STATE_ERROR", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa863dc3eeb6b9d6daea6718097e9afba0", null ],
      [ "RFM22B_STATE_FATAL_ERROR", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaa29a48aa40064638700998b35b23ec72f", null ],
      [ "RFM22B_STATE_NUM_STATES", "pios__rfm22b__priv_8h.html#ggaf31f5344b7afb099b3105bfff4debdcaacc8445257d6ed1782b22c1ee2a46f206", null ]
    ] ],
    [ "PIOS_RFM22_EXT_Int", "pios__rfm22b__priv_8h.html#ga34f82a23ad429841e5f212fc0c221131", null ],
    [ "PIOS_RFM22B_InjectEvent", "pios__rfm22b__priv_8h.html#ga4327e22931b06353b8340bfc91abdc59", null ],
    [ "PIOS_RFM22B_validate", "pios__rfm22b__priv_8h.html#gadb74603103aaab46ac72a08665bf0047", null ],
    [ "pios_rfm22b_com_driver", "pios__rfm22b__priv_8h.html#gafc506e8bc70ed8b31b75cbddf28ee660", null ]
];