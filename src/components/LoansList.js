import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function LoansList( {price, loanId, details, status}) {

  return (

    <View style={styles.pendindLoanView}>

        <View style={styles.insideView1}>
            <Text style={styles.priceTxt}>Rs. {price}</Text>
            
            <View style={styles.detailsTxtView}>
              <Text style={styles.detailsTxt}>Loan ID: {loanId}</Text>
              <Text style={styles.detailsTxt}>Details: {details}</Text>
            </View>
            
        </View> 
          {status == "REJECTED"
            ? <Text style={styles.statusRejectedTxt}>{status}</Text>
            : <Text style={styles.statusPendingTxt}>{status}</Text>
          }
          

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  priceTxt: {
    color: "#000000",
    fontSize: 18,
    marginTop:25,
    fontWeight: 'bold',
  },
  detailsTxt: {
    color: "#8F9BB3",
    fontSize: 18,
  },
  detailsTxtView:{
    marginTop:15,
  },
  statusPendingTxt: {
    paddingLeft: 16,
    alignItems: 'center',
    flex: 0,
    color: "#00E096",
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusRejectedTxt: {
    paddingLeft: 16,
    alignItems: 'center',
    flex: 0,
    color: "#FF3D71",
    fontSize: 18,
    fontWeight: 'bold',
  },
  pendindLoanView: {
      flex: 1,
      justifyContent: "flex-start", // main axis
      alignItems: "center", 
      flexDirection: 'row',
      paddingBottom: 20,
      marginHorizontal: 16,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: "#EDF1F7"
    },
    insideView1: {
      flex: 1,
      flexDirection: "column",
    },
  });
