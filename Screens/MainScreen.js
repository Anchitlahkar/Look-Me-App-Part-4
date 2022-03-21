import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

// importing filters
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import Filter5 from '../components/Filter5';
import Filter6 from '../components/Filter6';
import Filter7 from '../components/Filter7';
import Filter8 from '../components/Filter8';
import Filter9 from '../components/Filter9';
import Filter10 from '../components/Filter10';
import Filter11 from '../components/Filter11';
import Filter12 from '../components/Filter12';


data =
{
    "Crowns":
        [
            {
                id: "1",
                src: require("../assets/filter/crown-pic1.png")
            },
            {
                id: "2",
                src: require("../assets/filter/crown-pic2.png")
            },
            {
                id: "3",
                src: require("../assets/filter/crown-pic3.png")
            },
        ],

    "flowers":
        [
            {
                id: "4",
                src: require("../assets/filter/flower-pic1.png")
            }, {

                id: "5",
                src: require("../assets/filter/flower-pic2.png")
            },
        ],

    "Hairs":
        [
            {
                id: "6",
                src: require("../assets/filter/flower-pic3.png")
            },
            {
                id: "7",
                src: require("../assets/filter/hair-pic1.png")
            },
        ],

    "Hats":
        [
            {
                id: "8",
                src: require("../assets/filter/hat-pic1.png")
            },
            {
                id: "9",
                src: require("../assets/filter/hat-pic2.png")
            },
        ],

    "Ears":
        [
            {
                id: "10",
                src: require("../assets/filter/other-pic1.png")
            },
            {
                id: "11",
                src: require("../assets/filter/other-pic2.png")
            },
            {
                id: "12",
                src: require("../assets/filter/other-pic3.png")
            }
        ]

}


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cameraPermission: null,
            faces: [],
            current_filter: "Filter",
            selected: "Crowns"
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }


    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ cameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
    }

    onFaceDetectionError(error) {
        console.log(error)
    }

    render() {
        const { cameraPermission } = this.state;

        if (cameraPermission === null) {
            return <View />
        }

        if (cameraPermission === false && !font) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        // console.log(this.state.faces)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />

                <View style={styles.headingContainer}>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}>😊 </Text>
                        <Text style={styles.titleText1}>Look </Text>
                        <Text style={styles.titleText2}>Me</Text>
                        <Text style={[styles.titleText1, { fontStyle: "normal" }]}> 😊 </Text>
                    </View>
                </View>

                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter1") {
                                return <Filter1 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter2") {
                                return <Filter2 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter3") {
                                return <Filter3 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter4") {
                                return <Filter4 key={face.id} face={face} />

                            }

                            else if (this.state.current_filter === "filter5") {
                                return <Filter5 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter6") {
                                return <Filter6 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter7") {
                                return <Filter7 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter8") {
                                return <Filter8 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter9") {
                                return <Filter9 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter10") {
                                return <Filter10 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter11") {
                                return <Filter11 key={face.id} face={face} />
                            }

                            else if (this.state.current_filter === "filter12") {
                                return <Filter12 key={face.id} face={face} />
                            }
                        })
                    }

                </View>

                <View style={styles.framesContainer}>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={
                                this.state.selected == "Crowns" ? styles.categoryBoxSelected : styles.categoryBox
                            }
                            onPress={() => { this.setState({ selected: "Crowns" }) }}
                        >
                            <Text>Crowns</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={
                                this.state.selected == "flowers" ? styles.categoryBoxSelected : styles.categoryBox
                            }
                            onPress={() => { this.setState({ selected: "flowers" }) }}
                        >
                            <Text>flowers</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={
                                this.state.selected == "Hairs" ? styles.categoryBoxSelected : styles.categoryBox
                            }
                            onPress={() => { this.setState({ selected: "Hairs" }) }}
                        >
                            <Text>Hairs</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={
                                this.state.selected == "Hats" ? styles.categoryBoxSelected : styles.categoryBox
                            }
                            onPress={() => { this.setState({ selected: "Hats" }) }}
                        >
                            <Text>Hats</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={
                                this.state.selected == "Ears" ? styles.categoryBoxSelected : styles.categoryBox
                            }
                            onPress={() => { this.setState({ selected: "Ears" }) }}
                        >
                            <Text>Ears</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ flexDirection: "row", }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data[this.state.selected].map(filter_data => {
                                return (
                                    <TouchableOpacity
                                        style={styles.filterImageContainer}
                                        onPress={() => {
                                            this.setState({ current_filter: `filter${filter_data.id}` })
                                        }}
                                    >
                                        <Image source={filter_data.src} style={{ height: 40, width: 80, resizeMode: "contain" }} />

                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    androidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000"
    },

    titleText: {
        fontSize: 30
    },

    cameraStyle: {
        flex: 0.9,
        padding: 10,
        backgroundColor: "green"
    },
    
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
    },

    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",

    },

    framesContainer: {
        flex: 0.3,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#000"
    },

    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20,
    },

    categoryContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: RFValue(15),
        height: RFValue(20),
    },

    categoryBox: {
        flex: 0.3,
        borderRadius: 7.5,
        borderWidth: 1,
        backgroundColor: "white",
        width: "100%",
        margin: 1,
        alignItems: 'center',
        height: 25,
    },

    categoryBoxSelected: {
        flex: 0.3,
        borderRadius: 7.5,
        borderWidth: 1,
        backgroundColor: "#efb141",
        width: "100%",
        margin: 1,
        alignItems: 'center',
        height: 25
    }
});