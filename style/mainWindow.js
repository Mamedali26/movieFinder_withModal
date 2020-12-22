import {StyleSheet} from "react-native";

export const stylesMain = StyleSheet.create({
    // ---- Container ----
    container: {
        backgroundColor: "peachpuff",
        flex: 1,
    },
    // ----- Header ------
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
    },
    headerText: {
        color: "maroon",
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "bold",
        backgroundColor: "lavenderblush",
        padding: 10,
    },
    headerTextSpan: {
        color: "lightseagreen",
    },
    logoView: {
        borderWidth: 2,
        backgroundColor: "firebrick",
        marginBottom: 15,
        padding: 10,
        borderRadius: 50,
        borderColor: "maroon",
    },
    logoText: {
        fontFamily: "Tahoma",
        fontWeight: "bold",
        color: "lemonchiffon",
        fontSize: 19,
    },
    // ---- Search Form ---------
    searchView: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "bisque",
        marginBottom: 15,
        padding: 15,
    },
    searchInput: {
        borderWidth: 2,
        borderColor: "maroon",
        fontSize: 24,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "white",
    },
    searchBtn: {
        borderWidth: 2,
        backgroundColor: "maroon",
        padding: 9,
        borderRadius: 15,
        borderColor: "maroon",
    },
    searchBtnText: {
        fontFamily: "Tahoma",
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
    },
    // ----- Filtered Data -------
    filteredDataView: {
        flex: 3,
    },
    searchResultText: {
        justifyContent: "center",
        color: "maroon",
        fontSize: 19,
        fontWeight: "bold",
        textAlign: "center",
    },
    movieView: {
        flex: 1,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    movieImage: {
        resizeMode: "stretch",
        marginBottom: 10,
        width: "80%",
        height: 500,
    },
    movieName: {
        fontSize: 29,
        fontWeight: "bold",
        color: "maroon",
        textTransform: "uppercase",
        textAlign: "center",
        margin: 20,
        marginBottom: 10,
    },
    movieSummary: {
        fontSize: 24,
        fontFamily: "Tahoma",
        color: "black",
        textAlign: "center",
        lineHeight: 36,
        margin: 20,
        marginTop: 10,
    },
    // ----- Click for more information ---------
    clickForMore: {
        backgroundColor: "maroon",
        padding: 10,
    },
    clickForMoreText: {
        color: "white",
        fontSize: 24,
    }
});
