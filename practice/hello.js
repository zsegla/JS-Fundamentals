function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false; // Simulating dog walking success
            if (dogWalked) {
                resolve("Dog walked successfully!");
            } else {
                reject("Failed to walk the dog.");
            }
        }, 2000);
    });
}

function cleanKitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const kitchenCleaned = true; // Simulating kitchen cleaning success
            if (kitchenCleaned) {
                resolve("Kitchen cleaned successfully!");
            } else {       
                resolve("Failed to clean the kitchen.");
            }
        }, 3000);
    });
}

function takeouttrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const trashTakenOut = true; // Simulating trash taken out success
            if (trashTakenOut) {
                resolve("Trash taken out successfully!");
            } else {
                resolve("Failed to take out the trash.");
            }
        }, 1000);
    });
}


async function doChores() {
 
    try {
        const dogResult = await walkDog();
        console.log(dogResult);
        
        const kitchenResult = await cleanKitchen();
        console.log(kitchenResult);
        
        const trashResult = await takeouttrash();
        console.log(trashResult);
        
        console.log("All chores completed successfully!");
    } catch (error) {
        console.error("An error occurred while doing chores:", error);
}
    }

doChores();